import { Module, OnModuleInit, OnApplicationBootstrap } from '@nestjs/common';
import { MontedBService } from './monted-b.service';
import { MontedBController } from './monted-b.controller';

@Module({
  controllers: [MontedBController],
  providers: [MontedBService]
})
export class MontedBModule implements OnModuleInit, OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('bmodule,onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('bmodule,onApplicationBootstrap');
  }
}
