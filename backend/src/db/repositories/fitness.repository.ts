import { FitnessProvider, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

export class FitnessRepository {
  constructor(private prisma: PrismaService) {}

  public async getProviderForUser(
    userId: string,
  ): Promise<FitnessProvider | null> {
    return await this.prisma.fitnessProvider.findFirst({
      where: {
        owner: userId,
      },
    });
  }

  public async createProvider(provider: Prisma.FitnessProviderCreateArgs) {
    return await this.prisma.fitnessProvider.create(provider);
  }

  public async deleteProvider(provider: Prisma.FitnessProviderDeleteArgs) {
    return await this.prisma.fitnessProvider.delete(provider);
  }

  public async updateProvider(provider: Prisma.FitnessProviderUpdateInput) {
    return await this.prisma.fitnessProvider.update({
      where: { id: provider.id as string },
      data: provider,
    });
  }
}
