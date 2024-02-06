import { Controller, Get, Post, Body, Param, UseInterceptors, Query, UploadedFiles } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  @Post('create')
  body(@Body() createPersonDto: CreatePersonDto) {
    return `${JSON.stringify(createPersonDto)}`;
  }

  @Post('file')
  @UseInterceptors(AnyFilesInterceptor({
    dest: 'uploads/'
  }))
  body2(@Body() createPersonDto: CreatePersonDto, @UploadedFiles() files: Array<any>) {
    console.log(files);
    return `${JSON.stringify(createPersonDto)}`;
  }


  @Get('find')
  findQuery(@Query('name') name: string, @Query('id') id: string) {

    return `${id}-${name}`;
  }

  @Get(':id')
  urlParam(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }



}
