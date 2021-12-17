import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { EmployeeEntity } from './entities/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepositoryService } from './employees.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  controllers: [EmployeesController],
  providers: [EmployeesService,EmployeesRepositoryService],
  exports: [EmployeesService,EmployeesRepositoryService],
})
export class EmployeesModule {}
