import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { NestRequest } from '../../types/request.type';
import { AutoGuard } from '../../auth/auto.guard';

@Controller('datasource')
export class DatasourceController {
  constructor(private fitnessRepository: FitnessRepository) {}

  @Get()
  @UseGuards(AutoGuard)
  public getDatasourcesForUser(@Req() request: NestRequest) {
    const datasourcesForUser = this.fitnessRepository.getProviderForUser(
      request.user.id,
    );

    return datasourcesForUser;
  }
}
