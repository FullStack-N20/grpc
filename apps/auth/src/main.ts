import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { AUTH } from '@app/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions> (
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../auth.proto'),
        package: AUTH
      }
    }
  )
  await app.listen();
}
bootstrap();
