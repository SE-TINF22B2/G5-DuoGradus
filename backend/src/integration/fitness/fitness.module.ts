import { Module } from '@nestjs/common';
import { FitnessService } from './fitness.service';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { PrismaModule } from 'src/db/prisma.module';
import { DatasourceController } from 'src/api/datasource/datasource.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PrismaModule,
  ],
  controllers: [DatasourceController],
  providers: [FitnessService],
  exports: [FitnessService],
})
export default class FitnessModule {}
