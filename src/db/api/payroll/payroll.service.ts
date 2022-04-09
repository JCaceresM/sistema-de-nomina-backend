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
    p.user_insert, p.bank_account_id, p.department_id , d.name as department_name , 
    (select  count(id)  from employee e where e.payroll_id=p.id) as num_employees  , 
        (select ba."name"  from 
        bank_account ba , bank_account_record bar  
        where p.id=bar.payroll_record_id and bar.bank_account_id= ba.id limit 1) as bank_account_name  , 

    COALESCE(json_agg(payroll_news) FILTER (WHERE payroll_news.id  IS NOT NULL), '[]') AS payroll_news 
    FROM payroll as p
    left join department d on d.id = p.department_id 
    left join lateral 
    (
    select
      * 
    from payroll_news AS pn 
    ) as payroll_news 
    on payroll_news.payroll_id  = p.id 

    WHERE 1=1 ${await searchConditionQuery(
      conditions,
      'payroll',
      'p',
    )}    GROUP BY p.id , d.name ;  
        `;

    return await getConnection().query(statement);
  }
}
