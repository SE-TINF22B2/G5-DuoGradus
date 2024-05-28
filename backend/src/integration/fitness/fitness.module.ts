import { Module } from '@nestjs/common';
import { FitnessService } from './fitness.service';
import { ConfigModule } from '@nestjs/config';
import { CredentialService } from '../credentials/credential.service';
import configuration from '../../config/configuration';
import { PrismaModule } from '../../db/prisma.module';
import { DatasourceController } from '../../api/datasource/datasource.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaModule,
  ],
  controllers: [DatasourceController],
  providers: [FitnessService, CredentialService],
  exports: [FitnessService],
})
export default class FitnessModule {}
