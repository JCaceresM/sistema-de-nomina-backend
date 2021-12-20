import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from './entities/activity.entity';
import { ActivityRepositoryService } from './activity.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityEntity])],
  controllers: [ActivityController],
  providers: [ActivityService,ActivityRepositoryService],
  exports: [ActivityService,ActivityRepositoryService],
})
export class ActivityModule {}
