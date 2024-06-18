import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UserRepository } from '../db/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  /**
   * Validates a user with a supplied password. This will return a user if both the username
   * and the email is valid. If not, this will return null.
   *
   * @param username
   * @param password
   * @returns
   */
  async validateUserPassword(
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.userRepository.findByEmail(username);

    if (
      user &&
      user.enabled &&
      (await bcrypt.compare(password, user.password))
    ) {
      return user;
    }

    return null;
  }

  /**
   * Hashes a password using the preferred hash algorithm.
   * @param password Plaintext password
   * @returns Hashed password
   */
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 12);
  }

  /**
   * Creates a new user
   *
   * @param email
   * @param displayName
   * @param password Plain text password, will be hashed before creation
   * @returns Created User
   */
  async createUser(
    email: string,
    displayName: string,
    password: string,
  ): Promise<User> {
    const hashedPassword = await this.hashPassword(password);

    return await this.userRepository.createUser(
      email,
      displayName,
      hashedPassword,
      false,
    );
  }

  async updateUser(userId, data: Prisma.UserUpdateInput) {
    return await this.userRepository.updateUser(userId, data);
  }
}
