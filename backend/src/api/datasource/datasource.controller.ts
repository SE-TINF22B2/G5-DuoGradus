import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FitnessRepository } from '../../db/repositories/fitness.repository';
import { NestRequest } from '../../types/request.type';
import { AutoGuard } from '../../auth/auto.guard';
import { Response } from 'express';
import { FitnessService } from '../../integration/fitness/fitness.service';
import { FitbitProvider } from '../../integration/fitness/providers/fitbit.provider';
import { LOGGER_SERVICE, LoggerService } from '../../logger/logger.service';

@Controller('datasource')
export class DatasourceController {
  constructor(
    private fitnessRepository: FitnessRepository,
    private fitnessService: FitnessService,
    @Inject(LOGGER_SERVICE)
    private loggerService: LoggerService,
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
    const datasource = await this.fitnessService.getProviderForUserById(
      request.user.id,
      params.id,
    );

    return datasource?.getInfo();
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

    res.status(204).send();
  }

  @Get('/:id/authorize')
  @UseGuards(AutoGuard)
  public async getAuthorizeURL(
    @Req() request: NestRequest,
    @Param() params: any,
    @Res() response: Response,
  ) {
    const responsibleProvider =
      await this.fitnessService.getProviderForUserById(
        request.user.id,
        params.id,
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

    const result = await responsibleProvider.authorizeCallback(
      request.user.id,
      code,
    );

    if (!result) {
      this.loggerService.warn('[Fitbit]: Access code has not been accepted');
      response.status(400).json({
        error: 'Token was not accepted',
      });
      return;
    }

    this.loggerService.debug(
      '[Fitbit]: Connection to fitbit has been configured successfull',
    );
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
      )) as FitbitProvider | null;

    if (!responsibleProvider) {
      response.status(400).json({
        error: 'Provider not available',
      });
      return;
    }

    try {
      const goals = await responsibleProvider.getFitnessData(
        request.user.id,
        new Date(),
        new Date(),
      );

      response.status(200).json(goals);
    } catch (error: any) {
      this.loggerService.error(
        '[Fitbit]: Unable to retrieve fitness data from fitbit',
      );

      // In future, it might be better to differentiate between correctable errors (i.e. not reachable), and not correctable errors
      // (i.e. refresh token invalid) and further update the datasource

      response.status(500).json({
        error: 'Unable to retrieve fitness data from Fitbit',
      });
    }
  }
}
