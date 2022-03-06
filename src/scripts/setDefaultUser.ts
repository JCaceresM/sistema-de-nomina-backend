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


const setDefaultUser = async (config: ConfigService, appConfigService: AppConfigService) => {
  const EmployeeRepository = getRepository<CreateEmployeeDto>(EmployeeEntity);
  const rolesRepository = getRepository<CreateRoleDto>(RoleEntity);
  const companyRepository = getRepository<CreateCompanyDto>(CompanyEntity);
  const activityRepository = getRepository<CreateActivityDto>(ActivityEntity);
  let defaultActivity = await activityRepository.find();
  let defaultRoles = await rolesRepository.find();
  let defaultCompany = await companyRepository.find();
  const defaultUser = await EmployeeRepository.find({
    email_login: config.get<string>('DEFAULT_USER_EMAIL'),
    user_name: config.get<string>('DEFAULT_USER_NAME'),
  });
  
  
  if (!defaultCompany.length) {
    let company = JSON.parse(config.get<string>('DEFAULT_COMPANY'));
    console.log(company);
    
    company = companyRepository.create({
      status: 'A',
      foundation_date: company.foundation_date,
      RNC: company.RNC,
      name: company.name,
    });
     await companyRepository.save(company);
  }
  defaultCompany = await companyRepository.find();
  if (!defaultRoles.length&& defaultCompany.length)  {
    const roles = JSON.parse(config.get<string>('DEFAULT_ROLES')).map(
      (role: Record<string, string>) => {
        return rolesRepository.create({
          status: 'A',
          rol_name: role.rol_name,
          type: role.type,
          company_id: defaultCompany[0].id,
        });
      },
    );

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
      status: 'A',
      user_name: config.get<string>('DEFAULT_USER_NAME'),
      email_login: config.get<string>('DEFAULT_USER_EMAIL'),
      password: config.get<string>('DEFAULT_USER_PASSWORD'),
      roles: defaultRoles,
      document_id:"000000000",
      company_id: defaultCompany[0].id,
      activities:defaultActivity

    });

     await EmployeeRepository.save(adminUser);
  }
};

export default setDefaultUser;
