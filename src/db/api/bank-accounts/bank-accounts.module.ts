import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountEntity } from './entities/account.entity';
import { BankAccountsRepositoryService } from './bank-accounts.repository';
import { BankAccountsRecordRepositoryService } from './bank-accounts-record.repository';
import { BankAccountRecordEntity } from './entities/bank-account-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountEntity, BankAccountRecordEntity])],
  controllers: [BankAccountsController],
  providers: [BankAccountsService,BankAccountsRepositoryService, BankAccountsRecordRepositoryService],
  exports: [BankAccountsService,BankAccountsRepositoryService, BankAccountsRecordRepositoryService],
})
export class BankAccountsModule {}