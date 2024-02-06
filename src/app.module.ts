import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';
import { MontedAModule } from './monted-a/monted-a.module';
import { MontedBModule } from './monted-b/monted-b.module';

@Module({
  imports: [PersonModule, OtherModule, MontedBModule, MontedAModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
