import { FitnessProviderCredential, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FitnessRepository {
  constructor(private prisma: PrismaService) {}

  public async getProvidersForUser(
    userId: string,
  ): Promise<FitnessProviderCredential[] | null> {
    return await this.prisma.fitnessProviderCredential.findMany({
      where: {
        userId,
      },
    });
  }

  public async getProviderForUserById(userId: string, provider: string) {
    return await this.prisma.fitnessProviderCredential.findFirst({
      where: {
        userId,
        type: provider,
      },
    });
  }

  public async createProvider(
    provider: Prisma.FitnessProviderCredentialCreateInput,
  ) {
    return await this.prisma.fitnessProviderCredential.create({
      data: provider,
    });
  }

  public async deleteProvider(
    provider: Prisma.FitnessProviderCredentialDeleteArgs,
  ) {
    return await this.prisma.fitnessProviderCredential.delete(provider);
  }

  public async deleteProviderForUser(user: string, type: string) {
    return await this.prisma.fitnessProviderCredential.deleteMany({
      where: {
        userId: user,
        type,
      },
    });
  }

  public async updateProvider(
    type: string,
    user: string,
    provider: Prisma.FitnessProviderCredentialUpdateInput,
  ) {
    return await this.prisma.fitnessProviderCredential.update({
      where: { type, userId: user },
      data: provider,
    });
  }
}
