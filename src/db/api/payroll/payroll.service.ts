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
    SELECT id, company_id, "name", "type", description, status, updated_at, created_at, user_update, user_insert, bank_account_id,
 COALESCE(json_agg(deparments) FILTER (WHERE deparments."payrollId"  IS NOT NULL), '[]') as deparments_ids
FROM payroll p
left join lateral ( select * from payroll_deparments pd where pd."payrollId" = p.id) as deparments
on true
    WHERE 1=1 ${await searchConditionQuery(
      conditions,
      'payroll',
      'p',
    )}    GROUP BY p.id  ;  
        `;

    return await getConnection().query(statement);
  }
}
