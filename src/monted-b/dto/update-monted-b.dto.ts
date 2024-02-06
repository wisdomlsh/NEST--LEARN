import { PartialType } from '@nestjs/mapped-types';
import { CreateMontedBDto } from './create-monted-b.dto';

export class UpdateMontedBDto extends PartialType(CreateMontedBDto) {}
