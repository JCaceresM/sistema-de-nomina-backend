import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { searchConditionQuery } from 'src/common/utils/responses/condition.helper';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { AFP, ISR, SFS } from 'src/common/utils/tax/index.helpers';
import { getConnection, Repository } from 'typeorm';
import { PayrollNewsRecord } from '../payroll-news-record/entities/payroll-news-record.entity';
import { PayrollRecordDetailEntity } from '../payroll-record-details/entities/payroll-record-detail.entity';
import { PayrollRecordUsersRelationEntity } from '../payroll-record-users-relation/entities/payroll-record-users-relation.entity';
import { PayrollRecordEntity } from './entities/payroll-record.entity';

@Injectable()
export class PayrollRecordService {
  constructor(
    @InjectRepository(PayrollRecordEntity)
    private payrollRecordRepository: Repository<PayrollRecordEntity>,
    @InjectRepository(PayrollNewsRecord)
    private payrollNewsRepository: Repository<PayrollNewsRecord>,
    @InjectRepository(PayrollRecordUsersRelationEntity)
    private payrollRecordUsersRelation: Repository<PayrollRecordUsersRelationEntity>,

    @InjectRepository(PayrollRecordDetailEntity)
    private PayrollRecordDetail: Repository<PayrollRecordDetailEntity>,
  ) {}
  async create(createPayrollDetailsRecordDto: any) {
    try {
      const createPayrollNewsRecord =
        createPayrollDetailsRecordDto?.payroll_news?.map((payrollNews) => {
          return {
            amount: payrollNews.amount,
            description: payrollNews.description,
            type: payrollNews.type,
            name: payrollNews.name,
            operation: payrollNews.operation,
            status: 'A',
            company_id: createPayrollDetailsRecordDto.company_id,
          };
        });
      const ISRDiscount = {
        amount: ISR(createPayrollDetailsRecordDto.salary),
        description:
          'Este es un descuento de ley atribuido Descuento de Impuesto Sobre la Renta(ISR)',
        type: 'P',
        name: 'Descuento de Impuesto Sobre la Renta(ISR)',
        operation: 'RESTA',
        status: 'A',
        company_id: createPayrollDetailsRecordDto.company_id,
      };
      const AFPDiscount = {
        ...ISRDiscount,
        amount: AFP(createPayrollDetailsRecordDto.salary),
        description:
          'Este es un descuento de ley atribuido Aseguradoras de Fondos de Pensiones(AFP)',
        name: 'Aseguradoras de Fondos de Pensiones(AFP)',
      };
      const SNSDiscount = {
        ...ISRDiscount,
        amount: SFS(createPayrollDetailsRecordDto.salary),
        description:
          'Este es un descuento de ley atribuido Seguro Nacional de Salud(SFS)',
        name: 'Seguro Nacional de Salud(SFSs)',
      };
      createPayrollNewsRecord.push(SNSDiscount);
      createPayrollNewsRecord.push(AFPDiscount);
      createPayrollNewsRecord.push(ISRDiscount);
      const payrollNewsCreated = await this.payrollNewsRepository.save(
        createPayrollNewsRecord,
      );
      const createPayrollRecordDetails = {
        status: 'A',
        employee_id: createPayrollDetailsRecordDto.employee_id,
        PayrollNews: payrollNewsCreated,
        company_id: createPayrollDetailsRecordDto.company_id,
        salary: createPayrollDetailsRecordDto.salary,
      };

      const data = await this.PayrollRecordDetail.save([
        createPayrollRecordDetails,
      ]);
      return data[0];
    } catch (error) {
      throw BadRequest({ body: error });
    }
  }

  async createMany(createPayrollRecordDto: any) {
    try {
      const payrollRacordDetails = await Promise.all(
        createPayrollRecordDto.employees.map((elem) => this.create(elem)),
      );
      const currentDate = new Date();
      const statement = `
      select *  from payroll_record pr where pr.payroll_id = ${
        createPayrollRecordDto.payroll_id
      } and pr.registered_at between '${currentDate.getFullYear()}-${
        currentDate.getMonth()+1
      }-01' and '${currentDate.getFullYear()}-${
        currentDate.getMonth()===10? 1: currentDate.getMonth()+2
      }-01'      
      `;
      
      const isRegistred = await getConnection().query(statement);
      if (isRegistred.length) {
        throw BadRequest({
          message: `No puedes registrar la nomina mas de una vez al mes`,
        });
      }
      const payrollRecordData = {
        company_id: createPayrollRecordDto.company_id,
        name: createPayrollRecordDto.name,
        type: createPayrollRecordDto.type,
        registered_at: createPayrollRecordDto.registered_at,
        description: createPayrollRecordDto.description,
        status: 'R',
        PayrollRecordDetails: payrollRacordDetails,
        payroll_id: createPayrollRecordDto.payroll_id,
      };
      const data: any = await this.payrollRecordRepository.save([
        payrollRecordData,
      ]);
      await Promise.all(
        data.map((item: any) =>
          this.payrollRecordUsersRelation.save([
            {
              employee_id: createPayrollRecordDto.user_id,
              payroll_record_id: item.id,
            },
          ]),
        ),
      );
      return { ...data[0], payrollRacordDetails };
    } catch (error) {
      throw BadRequest({ message: error.message||'not_ok' });
    }
  }
  async find(conditions) {
    const statement = `
    SELECT  pr.id, pr.company_id, pr."name", pr."type", pr.registered_at, pr.description,
            pr.status, pr.updated_at, pr.created_at, pr.user_update, 
		        pr.user_insert, pr.payroll_id,
             COALESCE(json_agg(payroll_record_detail) FILTER (WHERE payroll_record_detail.employee_id  IS NOT NULL), '[]') as payroll_record_detail 
		FROM payroll_record pr
	  left join lateral 
	  (
      select   prd.id, prd.updated_at, prd.created_at, prd.user_update, prd.user_insert,
        prd.voucher, prd.salary, prd.payroll_record_id, prd.employee_id ,json_agg(payroll_news_record) as payroll_news_record,
        emp.id, emp.first_name, emp.last_name, emp.gender,   emp.payment_method, emp.document_id, emp.document_id, pst."name" as position_name
        from payroll_record_detail prd
         inner join  employee emp on emp.id =prd.employee_id
         left join  positions pst on pst.id =emp.position_id      
      left join lateral 
      (
        select  pnr.id,pnr.updated_at, pnr.created_at, pnr.user_update, pnr.user_insert, pnr.amount, pnr."type", pnr.description, pnr."name", pnr.operation,
        pnr.company_id, pnr.status, pnr.payroll_record_detail_id
        from payroll_news_record pnr 
        
      ) as payroll_news_record on payroll_news_record.payroll_record_detail_id =prd.id
      GROUP BY prd.id, emp.id, pst.name
    ) as payroll_record_detail on payroll_record_detail.payroll_record_id=pr.id 
	  where 1=1 ${await searchConditionQuery(conditions, 'payroll_record', 'pr')}
    GROUP BY pr.id
    `;
    const data = await getConnection().query(statement);
    return data;
  }
}
