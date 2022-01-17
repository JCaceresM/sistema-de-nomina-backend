import { Module } from '@nestjs/common';
import { BankAccountsService } from './bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountEntity } from './entities/account.entity';
import { BankAccountsRepositoryService } from './bank-accounts.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountEntity])],
  controllers: [BankAccountsController],
  providers: [BankAccountsService,BankAccountsRepositoryService],
  exports: [BankAccountsService,BankAccountsRepositoryService],
})
export class BankAccountsModule {}
