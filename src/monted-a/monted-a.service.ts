import { Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { CreateMontedADto } from './dto/create-monted-a.dto';
import { UpdateMontedADto } from './dto/update-monted-a.dto';

@Injectable()
export class MontedAService implements OnModuleInit, OnApplicationBootstrap {

  onApplicationBootstrap() {
    console.log('aservice, onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('aservice, onModuleInit');
  }
  create(createMontedADto: CreateMontedADto) {
    return 'This action adds a new montedA';
  }

  findAll() {
    return `This action returns all montedA`;
  }

  findOne(id: number) {
    return `This action returns a #${id} montedA`;
  }

  update(id: number, updateMontedADto: UpdateMontedADto) {
    return `This action updates a #${id} montedA`;
  }

  remove(id: number) {
    return `This action removes a #${id} montedA`;
  }
}
