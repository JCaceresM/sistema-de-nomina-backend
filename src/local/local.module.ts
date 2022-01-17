import { Module } from '@nestjs/common';
import { LocalService } from './local.service';
import { LocalController } from './local.controller';

@Module({
  controllers: [LocalController],
  providers: [LocalService],
  exports: [LocalService]
})
export class LocalModule {}
