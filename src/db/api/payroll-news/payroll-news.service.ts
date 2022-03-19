import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { searchConditionQuery } from 'src/common/utils/responses/condition.helper';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { getConnection, getRepository, Repository } from 'typeorm';
import { PayrollNewsRelationEntity } from '../payroll-news-relation/entities/payroll-news-relation.entity';
import { PayrollNewsDto } from './dto/create-payroll-news.dto';
import { UpdatePayrollNewsDto } from './dto/update-payroll-news.dto';
import { PayrollNewsRepositoryService } from './payroll-news.repository';

@Injectable()
export class PayrollNewsService {
  constructor(
    private payrollNewsRepositoryService: PayrollNewsRepositoryService,
    @InjectRepository(PayrollNewsRelationEntity)
    private payrollNewsRelationRepository: Repository<PayrollNewsRelationEntity>,
  ) {}
  async addPayrollNews(
    employee_id: number,
    payrollNewsDto: UpdatePayrollNewsDto,
  ) {
    console.log(employee_id,payrollNewsDto);
    
    try {
      const data = await this.payrollNewsRepositoryService.create(
        payrollNewsDto,
      );
      this.payrollNewsRelationRepository.save({
        employee_id,
        payroll_news_id: data.id,
        company_id: payrollNewsDto.company_id,
        user_insert: payrollNewsDto.user_insert
      });
    } catch (error) {
      console.log(error);
      
      throw BadRequest({})
    }
  }
 async getEmployeeNews(id:number) {
   const statement = `
      SELECT prn.id, prn.amount, prn."type", prn.description, prn."name", prn.operation, 
            prn.company_id, prn.status, prn.updated_at, prn.created_at, prn.user_update, prn.user_insert, prn.payroll_id 
      FROM payroll_news prn,
          payroll_news_relation pnr 
      where prn.id  = pnr.payroll_news_id and ${id}= pnr.employee_id 
   `
   return await getConnection().query(statement)
 }
//  async getPayrollNews(conditions) {
//    const statement = `
//    SELECT pn.id, pn.amount, pn."type", pn.description, pn."name", pn.operation, pn.company_id, pn.status, pn.updated_at, pn.created_at, pn.user_update, pn.user_insert, pn.payroll_id
//    FROM payroll_news pn where 1=1 ${ await searchConditionQuery(conditions,"payroll_news",'pn')}
//    `
//    return await getConnection().query(statement)
//  }
}
