# Logging

Die Logging-Funktionen werden durch das Interface `LoggerService` abstrahiert. Dadurch kann später einfacher zu einem anderen Logger gewechselt werden. Aktuell wird der von NestJS bereitgestellte `ConsoleLogger` (<https://docs.nestjs.com/techniques/logger>) verwendet. Dieser erfüllt das `LoggerService` Interface.

## Logging Level

Es werden vier Logging Level unterstützt, um unterschiedliche Dringlichkeitsstufen zu repräsentieren:

- **log**: allgemeine Informationen
- **error**: Fehler
- **warn**: Warnungen
- **debug**: Informationen zur Fehlerbehebung

## Beispiel

Im Modul wird der Logger Service als Provider registriert. Dabei kann mit dem Parameter `useClass` die konkrete Implementierung gewählt werden.

```ts
import { ConsoleLogger, Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { LOGGER_SERVICE } from './logger/logger.service';

@Module({
  controllers: [ExampleController],
  providers: [
    {
      useClass: ConsoleLogger,
      provide: LOGGER_SERVICE,
    },
  ],
})
export class ExampleModule {}
```

In z.B. einem Controller kann dann durch Dependency Injection auf den Logger zugegriffen werden. Dafür wird dieser als Parameter im Konstruktor übergeben und mit dem `@Inject`-Decorator versehen.

```ts
import { Controller, Get, Inject } from '@nestjs/common';
import { LOGGER_SERVICE, LoggerService } from './logger/logger.service';

@Controller()
export class ExampleController {
  constructor(
    @Inject(LOGGER_SERVICE)
    private readonly loggerService: LoggerService,
  ) {}

  @Get('/example')
  getExample(): string {
    this.loggerService.log('example log message');
    return 'example';
  }
}
```
