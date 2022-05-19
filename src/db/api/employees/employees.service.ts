import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryParams } from 'src/common/types/response.type';
import { searchConditionQuery, SelectConditionType } from 'src/common/utils/responses/condition.helper';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { paginatedQuery } from 'src/common/utils/responses/pagination';
import { getConnection, Repository } from 'typeorm';
import { AddressRepositoryService } from '../address/address.repository';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { PayrollNewsRelationEntity } from '../payroll-news-relation/entities/payroll-news-relation.entity';
import { PayrollNewsRepositoryService } from '../payroll-news/payroll-news.repository';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeEntity } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private employeesRepository: Repository<EmployeeEntity>,
    private addressRepositoryService: AddressRepositoryService,
  ) {}
  async findByUserName(username: string): Promise<CreateEmployeeDto[]> {
    return await this.employeesRepository.find({
      where: { user_name: username },
    });
  }
  async createEmployee(
    record: CreateEmployeeDto & CreateAddressDto,
  ): Promise<any> {
    const dataAddress = {
      street: record.street,
      municipality: record.municipality,
      province: record.province,
      sector: record.sector,
    };
    delete record.street;
    delete record.municipality;
    delete record.province;
    delete record.sector;
    const address = await this.addressRepositoryService.create(
      dataAddress as unknown as CreateAddressDto,
    );

    const [employee] = await this.employeesRepository.save([
      { ...record, address: [address] },
    ]);
    return { ...employee, address };
  }
  async find(conditions: SelectConditionType[]=[], queryParams:QueryParams) {
    const statement = `
    SELECT emp.id, emp.document_id,  emp.first_name, 
    emp.last_name, emp.gender, emp.marital_status, emp.status, emp.born_date,  emp.fax, 
    emp.tell, emp.cell, emp.email, emp.company_id, emp.salary, emp.full_name_emergency_contact, emp.cell_emergency_contact, 
    emp.tell_emergency_contact, emp.relation_emergency_contact, emp.payment_method, emp.blond_type, emp.relinquishment, 
    emp.relinquishment_detail, emp.updated_at, emp.created_at, emp.user_update, emp.user_insert, emp.department_id, 
    emp.position_id, emp.payroll_id ,  COALESCE(json_agg(payroll_news) FILTER (WHERE payroll_news.amount  IS NOT NULL), '[]') AS payroll_news , d."name" as department
FROM employee as emp 
left join department d on d.id = emp.department_id
left join lateral 
(SELECT * FROM public.payroll_news AS pn 
  INNER JOIN payroll_news_relation r
  ON r.employee_id = emp.id and pn.id = r.payroll_news_id 

) as payroll_news on true

where  1=1 ${ await searchConditionQuery(conditions,'employee','emp')}
GROUP BY emp.id, d."name"
   
 
  
        `;        
        const [data, meta]:any = await paginatedQuery(statement, queryParams);
 
    return {data:data.map((item)=> {
      if(item.payroll_news.some(item=> item ===null)){
        delete item.payroll_news
      }
      return {...item}
    }),meta}
  }

  async findOne(params: UpdateEmployeeDto) {
    return await this.employeesRepository.find({ where: { ...params } });
  }
  async update(
    id: number,
    updatePayrollRecordDetailDto: UpdateEmployeeDto,
  ) {
    const data = await this.employeesRepository.update(
      id,
      updatePayrollRecordDetailDto,
    );
    if (data.affected) {
      return { ...data, dataUpdated: await this.findOne({id}) };
    }
    throw BadRequest({
      message: `unable to update record with id ${id}`,
    });
  }
  
}
