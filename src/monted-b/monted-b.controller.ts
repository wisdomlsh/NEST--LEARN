import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { MontedBService } from './monted-b.service';
import { CreateMontedBDto } from './dto/create-monted-b.dto';
import { UpdateMontedBDto } from './dto/update-monted-b.dto';

@Controller('monted-b')
export class MontedBController implements OnModuleInit, OnApplicationBootstrap {
  constructor(private readonly montedBService: MontedBService) { }

  onApplicationBootstrap() {
    console.log('bcontroller, onApplicationBootstrap');
  }
  onModuleInit() {
   console.log('bcontroller, onModuleInit');
  }

  @Post()
  create(@Body() createMontedBDto: CreateMontedBDto) {
    return this.montedBService.create(createMontedBDto);
  }

  @Get()
  findAll() {
    return this.montedBService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.montedBService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMontedBDto: UpdateMontedBDto) {
    return this.montedBService.update(+id, updateMontedBDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.montedBService.remove(+id);
  }
}
