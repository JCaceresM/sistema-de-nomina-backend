import { Module } from '@nestjs/common';
import { EmployeesModule } from './api/employees/employees.module';
import { RolesModule } from './api/roles/roles.module';
import { DepartmentsModule } from './api/departments/departments.module';
import { ContactInfoModule } from './api/contact-info/contact-info.module';
import { CompanyModule } from './api/company/company.module';
import { AddressModule } from './api/address/address.module';
import { ContactParentModule } from './api/contact-parent/contact-parent.module';
import { ActivityModule } from './api/activity/activity.module';
import { PaysheetModule } from './api/paysheet/paysheet.module';
import { CashDiscountModule } from './api/cash-discount/cash-discount.module';
import { PaymentNewsModule } from './api/payment-news/payment-news.module';

@Module({
  imports: [
    EmployeesModule,
    RolesModule,
    DepartmentsModule,
    ContactInfoModule,
    CompanyModule,
    AddressModule,
    ContactParentModule,
    ActivityModule,
    PaysheetModule,
    CashDiscountModule,
    PaymentNewsModule,
  ],
})
export class DatabaseEntitiesModule {}
