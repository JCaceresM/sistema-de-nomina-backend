import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SelectConditionType } from 'src/common/utils/responses/condition.helper';
import { BankAccountsRepositoryService } from './bank-accounts.repository';
import { BankAccountsService } from './bank-accounts.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Controller('accounts')
export class BankAccountsController {
  constructor(
    private readonly BARepositoryService: BankAccountsRepositoryService,
    private bankAccountsRecordRepositoryService: BankAccountsService,
  ) {}

  @Post()
  create(@Body() createAccountDto: CreateBankAccountDto) {
    return this.BARepositoryService.create(createAccountDto);
  }

  @Post('collection')
  async collection(
    @Param('take') take: number,
    @Param('skip') skip: number,
    @Body() params: { searchConditions: SelectConditionType[] },
  ) {
    return this.bankAccountsRecordRepositoryService.find(
      params.searchConditions,
      { page: take, size: skip },
    );
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BARepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateBankAccountDto,
  ) {
    return this.BARepositoryService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.BARepositoryService.remove(+id);
  }
}
