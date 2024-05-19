import { FitnessProvider, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FitnessRepository {
  constructor(private prisma: PrismaService) {}

  public async getProvidersForUser(
    userId: string,
  ): Promise<FitnessProvider[] | null> {
    return await this.prisma.fitnessProvider.findMany({
      where: {
        userId,
      },
    });
  }

  public async getProviderForUserById(
    userId: string,
    provider: string
  ) {
    return await this.prisma.fitnessProvider.findFirst({
      where: {
        userId,
        type: provider
      }
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
