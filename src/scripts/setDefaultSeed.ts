import { getRepository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { RoleEntity } from 'src/db/api/roles/entities/role.entity';
import { EmployeeEntity } from 'src/db/api/employees/entities/employee.entity';
import { CompanyEntity } from 'src/db/api/company/entities/company.entity';
import { CreateEmployeeDto } from 'src/db/api/employees/dto/create-employee.dto';
import { CreateRoleDto } from 'src/db/api/roles/dto/create-role.dto';
import { CreateCompanyDto } from 'src/db/api/company/dto/create-company.dto';
import { AppConfigService } from 'src/config/getterConfig.service';
import { ActivityEntity } from 'src/db/api/activity/entities/activity.entity';
import { CreateActivityDto } from 'src/db/api/activity/dto/create-activity.dto';
import * as menu from '../seeders/menu.json';
import * as user from '../seeders/user.json';
import * as defaultRolesJSON from '../seeders/roles.json';
import * as defaultCompanyJSON from '../seeders/company.json';
import * as defaultDepartments from '../seeders/deparments.json';
import * as baSeed from '../seeders/bank-account.json';
import * as payrollSeed from '../seeders/payroll.json';

import { BankAccountEntity } from 'src/db/api/bank-accounts/entities/account.entity';
import { CreateDepartmentDto } from 'src/db/api/departments/dto/create-department.dto';
import { DepartmentEntity } from 'src/db/api/departments/entities/department.entity';
import { PayrollEntity } from 'src/db/api/payroll/entities/payroll.entity';
import { CreateBankAccountDto } from 'src/db/api/bank-accounts/dto/create-bank-account.dto';
import { CreatePayrollDto } from 'src/db/api/payroll/dto/create-payroll.dto';

export const setDefaultSeed = async () => {
  const EmployeeRepository = getRepository<CreateEmployeeDto>(EmployeeEntity);
  const rolesRepository = getRepository<CreateRoleDto>(RoleEntity);
  const companyRepository = getRepository<CreateCompanyDto>(CompanyEntity);
  const activityRepository = getRepository<CreateActivityDto>(ActivityEntity);
  let defaultActivity = await activityRepository.find();
  let defaultRoles = await rolesRepository.find();
  let defaultCompany = await companyRepository.find();
  const defaultUser = await EmployeeRepository.find({
    email_login: user.email_login,
    user_name: user.user_name,
  });
  console.log(user.email_login, user.user_name);

  if (!defaultCompany.length) {
    const company = companyRepository.create({
      status: 'A',
      ...defaultCompanyJSON,
    });
    await companyRepository.save(company);
  }
  defaultCompany = await companyRepository.find();
  if (!defaultRoles.length && defaultCompany.length) {
    const roles = defaultRolesJSON.map((role: CreateRoleDto) => {
      return rolesRepository.create({
        status: 'A',
        rol_name: role.rol_name,
        type: role.type,
        company_id: defaultCompany[0].id,
      });
    });

    await rolesRepository.save(roles);
  }

  if (!defaultActivity.length) {
    const menuCreate = activityRepository.create(menu);

    await activityRepository.save(menuCreate);
  }
  defaultRoles = await rolesRepository.find();
  defaultActivity = await activityRepository.find();

  if (!defaultUser.length && defaultRoles.length && defaultActivity.length) {    
    const adminUser = EmployeeRepository.create({
      ...user,
      roles: defaultRoles,
      company_id: defaultCompany[0].id,
      activities: defaultActivity,
    });

    await EmployeeRepository.save(adminUser);
  }
};

export const setDefaultPayroll = async () => {
  const companyRepository = getRepository<CreateCompanyDto>(CompanyEntity);

  const defaultCompany = await companyRepository.find();
  if (defaultCompany.length) {
    const deparmentRepository =
      getRepository<CreateDepartmentDto>(DepartmentEntity);
    let departments = await deparmentRepository.find();
    if (!departments.length) {
      const data = deparmentRepository.create(defaultDepartments.map((item)=>({...item,company_id: defaultCompany[0].id})));
      await deparmentRepository.save(data);
    }
    const bankAccountRepository =
      getRepository<CreateBankAccountDto>(BankAccountEntity);
    let bankAccountData = await bankAccountRepository.find();
    if (!bankAccountData.length) {
      const create = bankAccountRepository.create({...baSeed, company_id: defaultCompany[0].id});
      await bankAccountRepository.save(create);
    }
    const payrollRepository = getRepository<CreatePayrollDto>(PayrollEntity);
    bankAccountData = await bankAccountRepository.find();
    departments = await deparmentRepository.find();
    const data = await payrollRepository.find();
    if (!data.length && bankAccountData.length && departments.length) {
      const [fixedPayroll] = payrollSeed.filter((item) => item.type === 'F');
      const [occacionalPayroll] = payrollSeed.filter((item) => item.type === 'O');
      const [subsidyPayroll] = payrollSeed.filter((item) => item.type === 'S');
      const fixedDepartments = departments.filter((item) => item.type === 'F');
      const occacionalDepartments = departments.filter(
        (item) => item.type === 'O',
      );
      const subsidyDepartments = departments.filter(
        (item) => item.type == 'S',
      );
      const created = payrollRepository.create([
        {
          ...fixedPayroll,company_id: defaultCompany[0].id,
          deparments: fixedDepartments,
          bank_account_id: bankAccountData[0].id,
        },
        {
          ...subsidyPayroll,company_id: defaultCompany[0].id,
          deparments: subsidyDepartments,
          bank_account_id: bankAccountData[0].id,
        },
        {
          ...occacionalPayroll,company_id: defaultCompany[0].id,
          deparments: occacionalDepartments,
          bank_account_id: bankAccountData[0].id,
        },
      ] as any);
console.log(created);

      await payrollRepository.save(created);
    }
  } else {
    console.log('no company');
  }
};
