import { getRepository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { RoleEntity } from 'src/db/api/roles/entities/role.entity';
import { EmployeeEntity } from 'src/db/api/employees/entities/employee.entity';
import { CompanyEntity } from 'src/db/api/company/entities/company.entity';
import { CreateEmployeeDto } from 'src/db/api/employees/dto/create-employee.dto';
import { CreateRoleDto } from 'src/db/api/roles/dto/create-role.dto';
import { CreateCompanyDto } from 'src/db/api/company/dto/create-company.dto';
import { AppConfigService } from 'src/config/getterConfig.service';

const setDefaultUser = async (config: ConfigService, appConfigService: AppConfigService) => {
  const EmployeeRepository = getRepository<CreateEmployeeDto>(EmployeeEntity);
  const rolesRepository = getRepository<CreateRoleDto>(RoleEntity);
  const companyRepository = getRepository<CreateCompanyDto>(CompanyEntity);
  let defaultRoles = await rolesRepository.find();
  let defaultCompany = await companyRepository.find();
  const defaultUser = await EmployeeRepository.find({
    email_login: config.get<string>('DEFAULT_USER_EMAIL'),
    user_name: config.get<string>('DEFAULT_USER_NAME'),
  });
  
  
  if (!defaultCompany.length) {
    let company = JSON.parse(config.get<string>('DEFAULT_COMPANY'));
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

  
  defaultRoles = await rolesRepository.find();
  if (!defaultUser.length && defaultRoles.length) {
  
    const adminUser = EmployeeRepository.create({
      status: 'A',
      user_name: config.get<string>('DEFAULT_USER_NAME'),
      email_login: config.get<string>('DEFAULT_USER_EMAIL'),
      password: config.get<string>('DEFAULT_USER_PASSWORD'),
      roles: defaultRoles,
      document_id:"000000000"

    });

     await EmployeeRepository.save(adminUser);
  }
};

export default setDefaultUser;
