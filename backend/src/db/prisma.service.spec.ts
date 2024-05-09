import { PrismaService } from './prisma.service';

describe('PrismaService testing', () => {
  it('should connect to the prisma service on initialization', async () => {
    const service = new PrismaService();
    service.$connect = jest.fn();

    await service.onModuleInit();

    expect(service.$connect).toHaveBeenCalled();
  });
});
