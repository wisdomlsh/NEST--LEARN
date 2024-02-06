import { Injectable, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { CreateMontedBDto } from './dto/create-monted-b.dto';
import { UpdateMontedBDto } from './dto/update-monted-b.dto';

@Injectable()
export class MontedBService implements OnModuleInit, OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('bservice,onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('bservice,onModuleInit');
  }
  create(createMontedBDto: CreateMontedBDto) {
    return 'This action adds a new montedB';
  }

  findAll() {
    return `This action returns all montedB`;
  }

  findOne(id: number) {
    return `This action returns a #${id} montedB`;
  }

  update(id: number, updateMontedBDto: UpdateMontedBDto) {
    return `This action updates a #${id} montedB`;
  }

  remove(id: number) {
    return `This action removes a #${id} montedB`;
  }
}
