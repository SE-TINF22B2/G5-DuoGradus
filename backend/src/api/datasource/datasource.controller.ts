import {
  Controller,
  Delete,
  Get,
  Param,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { NestRequest } from '../../types/request.type';
import { AutoGuard } from '../../auth/auto.guard';
import { Response } from 'express';
import { FitnessService } from 'src/integration/fitness/fitness.service';

@Controller('datasource')
export class DatasourceController {
  constructor(
    private fitnessRepository: FitnessRepository,
    private fitnessService: FitnessService,
  ) {}

  @Get()
  @UseGuards(AutoGuard)
  public async getDatasourcesForUser(@Req() request: NestRequest) {
    const datasourcesForUser = await this.fitnessRepository.getProvidersForUser(
      request.user.id,
    );

    return datasourcesForUser;
  }

  @Get('/:id')
  @UseGuards(AutoGuard)
  public async getDatasourceForUser(
    @Req() request: NestRequest,
    @Param() params: any,
  ) {
    const datasourceForUser =
      await this.fitnessRepository.getProviderForUserById(
        request.user.id,
        params.id,
      );

    return datasourceForUser;
  }

  @Delete('/:id')
  @UseGuards(AutoGuard)
  public async deleteDatasource(
    @Req() request: NestRequest,
    @Param() params: any,
    @Res() res: Response,
  ) {
    // Verify if the datasource exists
    const datasource = await this.fitnessRepository.getProviderForUserById(
      request.user.id,
      params.id,
    );

    if (!datasource) {
      res.status(400).json({
        error: 'Datasource was not enabled',
      });
    }

    await this.fitnessRepository.deleteProvider({
      where: { userId: request.user.id, type: params.id },
    });

    res.status(204);
  }

  @Get('/:id/authorize')
  @UseGuards(AutoGuard)
  public async getAuthorizeURL(
    @Req() request: NestRequest,
    @Param() params: any,
  ) {
    return this.fitnessService.getFitbitProvider().getAuthorizeURL();
  }
}
