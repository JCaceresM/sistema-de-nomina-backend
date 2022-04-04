import { Injectable } from '@nestjs/common';
import { QueryParams } from 'src/common/types/response.type';
import { sumNews } from 'src/common/utils/general/general';
import {
  SelectConditionType,
  searchConditionQuery,
} from 'src/common/utils/responses/condition.helper';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { paginatedQuery } from 'src/common/utils/responses/pagination';
import { BankAccountsRecordRepositoryService } from './bank-accounts-record.repository';
import { BankAccountsRepositoryService } from './bank-accounts.repository';

@Injectable()
export class BankAccountsService {
  constructor(
    private bankAccountsRepositoryService: BankAccountsRepositoryService,
    private bankAccountsRecordRepositoryService: BankAccountsRecordRepositoryService,
  ) {}
  async payment(
    payroll_record_id: number,
    bank_account_id: number,
    transaction_type: string,
    payroll: any,
  ) {
    const [bankAccount] = await this.bankAccountsRepositoryService.findBy({
      id: bank_account_id,
      status: 'A',
    });
    if (bankAccount !== undefined) {
      const income = payroll?.payroll_record_detail?.reduce(
        (prev: number, next: Record<string, number>) =>
          prev +
          next?.salary +
          sumNews(payroll?.payroll_record_detail?.payroll_news_record, 'SUMA'),
        0,
      );
      const deductions = sumNews(
        payroll?.payroll_record_detail?.payroll_news_record,
      );

      if (bankAccount.balance > income + deductions) {
        await this.bankAccountsRepositoryService.update(bank_account_id, {
          balance: bankAccount.balance - income + deductions,
        });
        await this.bankAccountsRecordRepositoryService.create({
          bank_account_id,
          payroll_record_id,
          amount: income,
          transaction_type,
          description: `monto debitado para pago de nomina ${payroll.name} pago a empleados `,
        });
        await this.bankAccountsRecordRepositoryService.create({
          bank_account_id,
          payroll_record_id,
          amount: deductions,
          transaction_type,
          description: `monto debitado para pago de nomina ${payroll.name} monto de deduciones`,
        });
      } else {
        throw BadRequest({ message: 'Fondos insuficientes' });
      }
    } else {
      throw BadRequest({ message: 'Esta cuenta no existe ' });
    }
  }
  async find(conditions: SelectConditionType[] = [], queryParams: QueryParams) {
    const statement = `
    SELECT ba.id, ba.description, ba."name", ba.status, ba.operation, ba.balance, ba.company_id, ba.updated_at, ba.created_at, ba.user_update, ba.user_insert
    FROM bank_account ba
    where  1=1 ${await searchConditionQuery(conditions, 'bank_account', 'ba')}
  
        `;
    const [data, meta]: any = await paginatedQuery(statement, queryParams);

    return {
      data,
      meta,
    };
  }
}
