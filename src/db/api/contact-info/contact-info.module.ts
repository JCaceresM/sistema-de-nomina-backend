import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfoEntity } from './entities/contact-info.entity';
import { ContactInfoRepositoryService } from './contact-info.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfoEntity])],

  controllers: [ContactInfoController],
  providers: [ContactInfoService,ContactInfoRepositoryService],
  exports: [ContactInfoService,ContactInfoRepositoryService],
})
export class ContactInfoModule {}
