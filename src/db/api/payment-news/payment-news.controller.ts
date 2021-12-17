import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentNewsService } from './payment-news.service';
import { CreatePaymentNewsDto } from './dto/create-payment-news.dto';
import { UpdatePaymentNewsDto } from './dto/update-payment-news.dto';
import { PaymentNewsRepositoryService } from './payment-news.repository';

@Controller('payment-news')
export class PaymentNewsController {
  constructor(private readonly paymentNewsService: PaymentNewsRepositoryService) {}

  @Post()
  create(@Body() createPaymentNewDto: CreatePaymentNewsDto) {
    return this.paymentNewsService.create(createPaymentNewDto);
  }

  @Get()
  findAll() {
    return this.paymentNewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentNewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentNewDto: UpdatePaymentNewsDto) {
    return this.paymentNewsService.update(+id, updatePaymentNewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentNewsService.remove(+id);
  }
}
