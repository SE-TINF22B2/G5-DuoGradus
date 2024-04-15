import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { UserRepository } from '../db/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  /**
   * Valides a user and a supplied password. This will return a user if both the username
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

    if (user && (await compare(password, user.password))) {
      return user;
    }

    return null;
  }
}
