import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  /**
   * Returns a user by his email address
   *
   * @param email
   * @returns
   */
  public async findByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  /**
   * Creates a new user
   *
   * @param email Valid mail address, must be unique
   * @param displayName Display Name chosen by the user
   * @param password Hashed Password
   * @returns User
   */
  public async createUser(
    email: string,
    displayName: string,
    password: string,
  ): Promise<User> {
    return await this.prisma.user.create({
      data: {
        email,
        displayName,
        password,
      },
    });
  }

  /**
   * Updates a user
   *
   * @param user
   * @returns Updated User
   */
  public async updateUser(
    id: string,
    update: Prisma.UserUpdateInput,
  ): Promise<User> {
    return await this.prisma.user.update({
      where: {
        id: id,
      },
      data: update,
    });
  }

  /**
   * Deletes a user
   *
   * @param where
   * @returns Deleted User
   */
  public async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return await this.prisma.user.delete({
      where,
    });
  }
}
