import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { MontedAService } from './monted-a.service';
import { CreateMontedADto } from './dto/create-monted-a.dto';
import { UpdateMontedADto } from './dto/update-monted-a.dto';

@Controller('monted-a')
export class MontedAController implements OnModuleInit, OnApplicationBootstrap {
  constructor(private readonly montedAService: MontedAService) {}

  onApplicationBootstrap() {
     console.log('acontroller, onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('acontroller, onModuleInit');
  }


  @Post()
  create(@Body() createMontedADto: CreateMontedADto) {
    return this.montedAService.create(createMontedADto);
  }

  @Get()
  findAll() {
    return this.montedAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.montedAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMontedADto: UpdateMontedADto) {
    return this.montedAService.update(+id, updateMontedADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.montedAService.remove(+id);
  }
}
