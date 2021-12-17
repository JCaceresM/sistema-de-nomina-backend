import { Module } from '@nestjs/common';
import { PaysheetService } from './paysheet.service';
import { PaysheetController } from './paysheet.controller';
import { PaysheetEntity } from './entities/paysheet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaysheetRepositoryService } from './paysheet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PaysheetEntity])],
  controllers: [PaysheetController],
  providers: [PaysheetService, PaysheetRepositoryService],
  exports: [PaysheetService, PaysheetRepositoryService],
})
export class PaysheetModule {}
