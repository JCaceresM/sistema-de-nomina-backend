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
import { PayrollNewsRecordModule } from './api/payroll-news-record/payroll-news-record.module';
import { PayrollNewsRelationModule } from './api/payroll-news-relation/payroll-news-relation.module';
import { PayrollRecordModule } from './api/payroll-record/payroll-record.module';
import { PayrollRecordUsersRelationModule } from './api/payroll-record-users-relation/payroll-record-users-relation.module';
import { PayrollRecordDetailsModule } from './api/payroll-record-details/payroll-record-details.module';

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
    PayrollNewsRecordModule,
    PayrollNewsRelationModule,PayrollRecordModule, PayrollRecordUsersRelationModule, PayrollRecordDetailsModule
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
    BankAccountsModule,PayrollRecordModule,
    PositionsModule,
  ],
})
export class DatabaseEntitiesModule {}
