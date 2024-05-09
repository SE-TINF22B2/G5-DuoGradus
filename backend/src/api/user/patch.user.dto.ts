import { IsEmail, IsOptional, Length } from 'class-validator';

export class PatchUserDTO {
  @IsEmail()
  @IsOptional()
  email: string | undefined;

  @Length(12, 72)
  @IsOptional()
  password: string | undefined;

  @Length(2, 128)
  @IsOptional()
  displayName: string | undefined;
}
