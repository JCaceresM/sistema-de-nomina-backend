import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './config/getterConfig.service';
import { AuthModule } from './auth/auth.module';
import { PositionsModule } from './db/api/positions/positions.module';
import  { typeormModuleOptions } from './config/database.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseEntitiesModule } from './db/db.module';
import { LocalModule } from './local/local.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeormModuleOptions(),
         } as TypeOrmModuleOptions),
    AuthModule,
   
    DatabaseEntitiesModule,
   
    LocalModule,
  ],

  providers: [AppConfigService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: AppConfigService) {
    AppModule.port = this._configService.get('PORT');
    
  }
}


