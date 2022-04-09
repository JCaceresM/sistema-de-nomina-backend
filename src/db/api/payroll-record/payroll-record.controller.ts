import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PayrollRecordService } from './payroll-record.service';
import { CreatePayrollRecordDto } from './dto/create-payroll-record.dto';
import { UpdatePayrollRecordDto } from './dto/update-payroll-record.dto';
import { PayrollRecordRepositoryService } from './payroll-record.repository';
import { BadRequest } from 'src/common/utils/responses/error.helper';
import { BankAccountsService } from '../bank-accounts/bank-accounts.service';

@Controller('payroll-record')
export class PayrollRecordController {
  constructor(
    private readonly payrollRecordRepositoryService: PayrollRecordRepositoryService,
    private readonly payrollRecordService: PayrollRecordService,
    private readonly bankAccountsService: BankAccountsService,
  ) {}

  @Post()
  create(@Body() createPayrollRecordDto: CreatePayrollRecordDto) {
    return this.payrollRecordService.createMany(createPayrollRecordDto);
  }

  @Post('collection')
  find(@Body() params) {
    return this.payrollRecordService.find(params.searchConditions);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollRecordRepositoryService.findOne(+id);
  }
  @Post('/done')
  async paymentDone(
    @Body()
    body: {
      payroll_record_id: number;
      bank_account_id: number;
      transaction_type: string;
    },
  ) {
    try {
      const payroll = await this.payrollRecordService.find([
        {
          field: 'id',
          operator: '=',
          condition: body.payroll_record_id,
        },
      ]);
      
      if (payroll.length) {
        await this.bankAccountsService.payment(
          body.payroll_record_id,
          body.bank_account_id,
          body.transaction_type,
          payroll[0],
        );
        await this.payrollRecordRepositoryService.update(
          +body.payroll_record_id,
          { status: 'AU' },
        );
    return {message: 'Pago Realizado'}
     
      } else {
        throw BadRequest({ message: ' Esta nomina no existe' });
      }
    } catch (error) {
      throw BadRequest({ message: error.message || 'no pagado' });
    }
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePayrollRecordDto: UpdatePayrollRecordDto,
  ) {
    return this.payrollRecordRepositoryService.update(
      +id,
      updatePayrollRecordDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollRecordRepositoryService.remove(+id);
  }
}
