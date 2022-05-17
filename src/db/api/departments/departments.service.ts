import { Injectable } from '@nestjs/common';
import { QueryParams } from 'src/common/types/response.type';
import { searchConditionQuery, SelectConditionType } from 'src/common/utils/responses/condition.helper';
import { paginatedQuery } from 'src/common/utils/responses/pagination';
import { getConnection } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
    async find(conditions: SelectConditionType[] = [], queryParams: QueryParams) {
        const statement = `
        SELECT d.id, d."name", d."location", d.budget, d.status, d."type", d.updated_at, d.created_at, d.user_update, d.user_insert, d.company_id,
        COALESCE(json_agg(employees) FILTER (WHERE employees."id"  IS NOT NULL), '[]') as employees
        FROM department d 
        inner join payroll_deparments pd on pd."departmentId"  = d.id 
        left join lateral 
        ( SELECT id, document_id, first_name, last_name, gender, age, marital_status, status, born_date, company_id, salary, updated_at, created_at, user_update, user_insert,
        department_id
        FROM employee e where d.id = e.department_id)
        as employees on true
        where  1=1 ${await searchConditionQuery(conditions, 'department', 'd')}
        GROUP by d.id
            `;
        const [data, meta]: any = await paginatedQuery(statement, queryParams);
    
        return {
          data,
          meta,
        };
      }
    async findNotInPayroll( conditions: SelectConditionType[] = [], queryParams: QueryParams) {
        const statement = `
        SELECT id, "name", "location", budget, status, "type", updated_at, created_at, user_update, user_insert, company_id
        FROM department d where d.id not in (select pd."departmentId"  from payroll_deparments pd)
           ${await searchConditionQuery(conditions, 'department', 'd')}
            `;
        const statement2 = `
        SELECT id, "name", "location", budget, status, "type", updated_at, created_at, user_update, user_insert, company_id
        FROM department d where d.id in (select pd."departmentId"  from payroll_deparments pd)
        and d.id in (select pd."departmentId"  from payroll_deparments pd where 1=1 ${await searchConditionQuery(conditions, 'payroll_deparments', 'pd')})
            `;
        const [data, meta]: any = await paginatedQuery( statement, queryParams);
    
        return {
          data, 
          meta,
        };
      }
    async findInPayroll( conditions: SelectConditionType[] = [], queryParams: QueryParams) {
   
        const statement = `
        SELECT id, "name", "location", budget, status, "type", updated_at, created_at, user_update, user_insert, company_id
        FROM department d where d.id in (select pd."departmentId"  from payroll_deparments pd)
        and d.id in (select pd."departmentId"  from payroll_deparments pd where 1=1 ${await searchConditionQuery(conditions, 'payroll_deparments', 'pd')})
            `;
        const [data, meta]: any = await paginatedQuery(statement, queryParams);
    
        return {
          data,
          meta,
        };
      }
    async deletedepartmentRelation(payrollId: number,departmentId: number) {
   
        const statement = `
        DELETE FROM public.payroll_deparments
        WHERE "payrollId"=${payrollId} AND "departmentId"=${departmentId};`
        const data: any = await getConnection().query(statement)
    
        return {
          data
        };
      }
}
