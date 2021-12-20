import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from '../roles/entities/role.entity';
import { UsersRepositoryService } from './users.repository';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],

  controllers: [UsersController],
  providers: [UsersService, UsersRepositoryService],
  exports: [UsersService, UsersRepositoryService]
})
export class UsersModule {}
