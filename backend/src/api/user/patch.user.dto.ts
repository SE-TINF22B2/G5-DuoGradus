import { PartialType } from '@nestjs/swagger';
import { RegisterUserDTO } from './register.user.dto';

export class PatchUserDTO extends PartialType(RegisterUserDTO) {}
