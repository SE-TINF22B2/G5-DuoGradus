import { FitnessProvider, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export class FitnessRepository {
  constructor(private prisma: PrismaService) {}

  public async getProviderForUser(
    userId: string,
  ): Promise<FitnessProvider | null> {
    return await this.prisma.fitnessProvider.findFirst({
      where: {
        userId,
      },
    });
  }

  public async createProvider(provider: Prisma.FitnessProviderCreateArgs) {
    return await this.prisma.fitnessProvider.create(provider);
  }

  public async deleteProvider(provider: Prisma.FitnessProviderDeleteArgs) {
    return await this.prisma.fitnessProvider.delete(provider);
  }

  public async updateProvider(
    type: string,
    user: string,
    provider: Prisma.FitnessProviderUpdateInput,
  ) {
    return await this.prisma.fitnessProvider.update({
      where: { type, userId: user },
      data: provider,
    });
  }
}
