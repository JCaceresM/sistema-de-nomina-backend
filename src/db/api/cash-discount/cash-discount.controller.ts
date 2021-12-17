import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CashDiscountRepositoryService } from './cash-discount.repository';
import { CashDiscountService } from './cash-discount.service';
import { CreateCashDiscountDto } from './dto/create-cash-discount.dto';
import { UpdateCashDiscountDto } from './dto/update-cash-discount.dto';

@Controller('cash-discount')
export class CashDiscountController {
  constructor(private readonly casDiscountRepositoryService: CashDiscountRepositoryService) {}

  @Post()
  create(@Body() createCashDiscountDto: CreateCashDiscountDto) {
    return this.casDiscountRepositoryService.create(createCashDiscountDto);
  }

  @Get()
  findAll() {
    return this.casDiscountRepositoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.casDiscountRepositoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCashDiscountDto: UpdateCashDiscountDto) {
    return this.casDiscountRepositoryService.update(+id, updateCashDiscountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.casDiscountRepositoryService.remove(+id);
  }
}
