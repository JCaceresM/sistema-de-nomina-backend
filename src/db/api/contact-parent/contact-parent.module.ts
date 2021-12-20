import { Module } from '@nestjs/common';
import { ContactParentService } from './contact-parent.service';
import { ContactParentController } from './contact-parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactParentEntity } from './entities/contact-parent.entity';
import { ContactParentRepositoryService } from './contact-parent.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ContactParentEntity])],
  controllers: [ContactParentController],
  providers: [ContactParentService, ContactParentRepositoryService],
  exports: [ContactParentService, ContactParentRepositoryService],
})
export class ContactParentModule {}
