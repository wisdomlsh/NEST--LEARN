import { PartialType } from '@nestjs/mapped-types';
import { CreateMontedADto } from './create-monted-a.dto';

export class UpdateMontedADto extends PartialType(CreateMontedADto) {}
