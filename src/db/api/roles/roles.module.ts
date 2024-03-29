import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { RolesRepositoryService } from './roles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RolesController],
  providers: [RolesService,RolesRepositoryService]
  ,exports: [RolesService,RolesRepositoryService]
})
export class RolesModule {}
