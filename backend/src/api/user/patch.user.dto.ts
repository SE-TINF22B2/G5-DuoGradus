import { IsEmail, Length } from 'class-validator';

export class PathUserDTO {
  @IsEmail()
  email: string | undefined;

  @Length(12, 72)
  password: string | undefined;
}
