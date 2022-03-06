import { Injectable } from '@nestjs/common';
import {
  searchConditionQuery,
  SelectConditionType,
} from 'src/common/utils/responses/condition.helper';
import { getConnection } from 'typeorm';


@Injectable()
export class PayrollService {
  async find(conditions: SelectConditionType[]) {
    const statement = `
    SELECT p.id, p.company_id, p."name", p."type", p.description, p.status, p.updated_at, p.created_at, p.user_update,
           p.user_insert, p.bank_account_id, p.department_id ,
           coalesce (jsonb_agg(payroll_news) filter (where payroll_news is not null),'[]') as payroll_news
    FROM payroll as p
    left join lateral 
      (
        select
          * 
        from payroll_news AS pn 
        LEFT JOIN payroll_news_relation r
        ON r.employee_id = p.id and pn.id = r.payroll_news_id
      ) as payroll_news 
      on true   WHERE 1=1 ${ await searchConditionQuery(conditions,'payroll','p')}
      GROUP BY p.id
        `;
        
    return await getConnection().query(statement);
  }
}
