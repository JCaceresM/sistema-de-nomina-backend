import { Injectable } from '@nestjs/common';
import { searchConditionQuery } from 'src/common/utils/responses/condition.helper';
import { getConnection } from 'typeorm';
import { CreatePayrollNewsRecordDto } from './dto/create-payroll-news-record.dto';
import { UpdatePayrollNewsRecordDto } from './dto/update-payroll-news-record.dto';

@Injectable()
export class PayrollNewsRecordService {
  create(createPayrollNewsRecordDto: CreatePayrollNewsRecordDto) {
    return 'This action adds a new payrollNewsRecord';
  }

  findAll() {
    return `This action returns all payrollNewsRecord`;
  }

  async find(conditions) {
    // const statement = `
    // SELECT  pr.id, pr.company_id, pr."name", pr."type", pr.registered_at, pr.description,
    //         pr.status, pr.updated_at, pr.created_at, pr.user_update, 
		//         pr.user_insert, pr.payroll_id, json_agg(payroll_record_detail) as payroll_record 
		// FROM payroll_record pr
	  // left join lateral 
	  // (
    //   select   prd.id, prd.updated_at, prd.created_at, prd.user_update, prd.user_insert,
    //     prd.voucher, prd.salary, prd.payroll_record_id, prd.employee_id ,json_agg(payroll_news_record) as payroll_news_record 
    //     from payroll_record_detail prd
    //   left join lateral 
    //   (
    //     select  pnr.id,pnr.updated_at, pnr.created_at, pnr.user_update, pnr.user_insert, pnr.amount, pnr."type", pnr.description, pnr."name", pnr.operation,
    //     pnr.company_id, pnr.status, pnr.payroll_record_detail_id
    //     from payroll_news_record pnr 
        
    //   ) as payroll_news_record on payroll_news_record.payroll_record_detail_id =prd.id
    //   GROUP BY prd.id 
    // ) as payroll_record_detail on payroll_record_detail.payroll_record_id=pr.id 
	  // where 1=1 ${ await searchConditionQuery(conditions,"payroll_record",'pr')}
    // GROUP BY pr.id, payroll_record_detail.id
    // `;
    // const data = await getConnection().query(statement)
    // return data
  }

  update(id: number, updatePayrollNewsRecordDto: UpdatePayrollNewsRecordDto) {
    return `This action updates a #${id} payrollNewsRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} payrollNewsRecord`;
  }
}
