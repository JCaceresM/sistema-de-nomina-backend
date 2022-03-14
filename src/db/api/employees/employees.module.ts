import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeeEntity } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepositoryService } from './employees.repository';
import { AddressModule } from '../address/address.module';
import { PayrollNewsRelationEntity } from '../payroll-news-relation/entities/payroll-news-relation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity, PayrollNewsRelationEntity]),AddressModule],
  controllers: [EmployeesController],
  providers: [EmployeesService,EmployeesRepositoryService],
  exports: [EmployeesService,EmployeesRepositoryService],
})
export class EmployeesModule {}
