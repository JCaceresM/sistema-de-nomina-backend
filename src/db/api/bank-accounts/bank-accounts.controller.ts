import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankAccountsRepositoryService } from './bank-accounts.repository';
import { BankAccountsService } from './bank-accounts.service';
import { BankCreateAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Controller('accounts')
export class BankAccountsController {
  constructor(private readonly BARepositoryService: BankAccountsRepositoryService) {}

  @Post()
  create(@Body() createAccountDto: BankCreateAccountDto) {
    return this.BARepositoryService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.BARepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.BARepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateBankAccountDto) {
    return this.BARepositoryService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.BARepositoryService.remove(+id);
  }
}
