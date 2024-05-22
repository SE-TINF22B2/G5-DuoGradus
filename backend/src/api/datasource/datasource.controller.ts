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
import { FitBitProvider } from 'src/integration/fitness/providers/fitbit.provider';
import * as dayjs from 'dayjs';

@Controller('datasource')
export class DatasourceController {
  constructor(
    private fitnessRepository: FitnessRepository,
    private fitnessService: FitnessService,
  ) {}

  @Get()
  @UseGuards(AutoGuard)
  public async getDatasourcesForUser(@Req() request: NestRequest) {
    const datasourcesForUser = await this.fitnessService.getDatasourcesForUser(
      request.user.id,
    );

    return datasourcesForUser.map((provider) => provider.getInfo());
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
      return;
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
    @Res() response: Response,
  ) {
    const providers = await this.fitnessService.getDatasourcesForUser(
      request.user.id,
    );

    const responsibleProvider = providers.find(
      (provider) => provider.getInfo().name == params.id,
    );

    if (!responsibleProvider) {
      response.status(400).json({
        error: 'Provider not available',
      });
      return;
    }

    response.status(200).json({
      url: responsibleProvider.getAuthorizeURL(),
    });
  }

  @Get('/:id/redirect')
  @UseGuards(AutoGuard)
  public async redirect(
    @Req() request: NestRequest,
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const responsibleProvider =
      await this.fitnessService.getProviderForUserById(request.user.id, id);

    if (!responsibleProvider) {
      response.status(400).json({
        error: 'Provider not available',
      });
      return;
    }

    const code = (request.query.code as string).split('#_=_')[0];

    const result = await responsibleProvider.getAccessTokenFromCode(
      request.user.id,
      code,
    );

    if (!result) {
      response.status(400).json({
        error: 'Token was not accepted',
      });
      return;
    }

    response.status(200).json(responsibleProvider.getInfo());
  }

  /**
   * This endpoint returns the fitness goals set in fitbit.
   * It is designed as a simple check if the API is working correctly and thus not documented in the API scheme.
   */
  @Get('/:id/daily')
  @UseGuards(AutoGuard)
  public async getGoals(
    @Req() request: NestRequest,
    @Param('id') id: string,
    @Res() response: Response,
  ) {
    const responsibleProvider =
      (await this.fitnessService.getProviderForUserById(
        request.user.id,
        id,
      )) as FitBitProvider | null;

    if (!responsibleProvider) {
      response.status(400).json({
        error: 'Provider not available',
      });
      return;
    }

    const goals = await responsibleProvider.getFitnessData(
      request.user.id,
      new Date(),
      new Date(),
    );

    response.status(200).json(goals);
  }
}
