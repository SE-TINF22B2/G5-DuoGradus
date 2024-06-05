import { ConsoleLogger, Module } from '@nestjs/common';
import { FitnessService } from './fitness.service';
import { ConfigModule } from '@nestjs/config';
import { CredentialService } from '../credentials/credential.service';
import configuration from '../../config/configuration';
import { PrismaModule } from '../../db/prisma.module';
import { DatasourceController } from '../../api/datasource/datasource.controller';
import { LOGGER_SERVICE } from '../../logger/logger.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaModule,
  ],
  controllers: [DatasourceController],
  providers: [
    FitnessService,
    CredentialService,
    { useClass: ConsoleLogger, provide: LOGGER_SERVICE },
  ],
  exports: [FitnessService],
})
export default class FitnessModule {}
