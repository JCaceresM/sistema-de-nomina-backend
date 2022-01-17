import { Module } from '@nestjs/common';
import { EmployeesModule } from './api/employees/employees.module';
import { RolesModule } from './api/roles/roles.module';
import { DepartmentsModule } from './api/departments/departments.module';
import { CompanyModule } from './api/company/company.module';
import { AddressModule } from './api/address/address.module';
import { ActivityModule } from './api/activity/activity.module';
import { payrollModule } from './api/payroll/payroll.module';
import { PayrollNewsModule } from './api/payroll-news/payroll-news.module';
import { BankAccountsModule } from './api/bank-accounts/bank-accounts.module';
import { PositionsModule } from './api/positions/positions.module';
import { ParametersModule } from './api/parameters/parameters.module';

@Module({
  imports: [
    EmployeesModule,
    RolesModule,
    DepartmentsModule,
    CompanyModule,
    AddressModule,
    ActivityModule,
    payrollModule,
    PayrollNewsModule,
    BankAccountsModule,
    PositionsModule,
    ParametersModule,
  ],
  exports: [
    EmployeesModule,
    RolesModule,
    DepartmentsModule,
    CompanyModule,
    AddressModule,
    ActivityModule,
    payrollModule,
    PayrollNewsModule,
    BankAccountsModule,
    PositionsModule,
  ],
})
export class DatabaseEntitiesModule {}
