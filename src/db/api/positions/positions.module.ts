import { Module } from '@nestjs/common';
import { PositionsService } from './positions.service';
import { PositionsController } from './positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionEntity } from './entities/position.entity';
import { PositionsRepositoryService } from './positions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PositionEntity])],
  controllers: [PositionsController],
  providers: [PositionsService,PositionsRepositoryService],
  exports: [PositionsService,PositionsRepositoryService],
})
export class PositionsModule {}
