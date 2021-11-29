import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
   .setTitle('Sistema de nomina')
    .addBearerAuth()
    .setDescription(
      'Esta es una API Creada con NestJS con Para un sistema de nomina',
    ).addTag('Endpoints')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};
