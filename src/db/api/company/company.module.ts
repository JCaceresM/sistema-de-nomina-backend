import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { CompanyEntity } from './entities/company.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyRepositoryService } from './company.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],

  controllers: [CompanyController],
  providers: [CompanyService,CompanyRepositoryService],
  exports: [CompanyService,CompanyRepositoryService],
})
export class CompanyModule {}
