import { IsEmail, Length } from 'class-validator';

export class RegisterUserDTO {
  @IsEmail()
  email: string;

  @Length(12, 72)
  password: string;

  @Length(2, 128)
  displayName: string;
}
