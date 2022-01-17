import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfigService } from './getterConfig.service';

@Module({
   imports: [ ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${
        process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
      }`,
      cache: true,
    }),],
   providers: [ConfigService, AppConfigService],
   exports: [ConfigService, AppConfigService],
})
export class ConfigDBModule {}
