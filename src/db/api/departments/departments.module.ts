import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { DepartmentEntity } from './entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentRepositoryService } from './departments.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentEntity])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService, DepartmentRepositoryService],
  exports: [DepartmentsService, DepartmentRepositoryService],
})
export class DepartmentsModule {}
