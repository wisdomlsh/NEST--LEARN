import { Module, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { MontedAService } from './monted-a.service';
import { MontedAController } from './monted-a.controller';

@Module({
  controllers: [MontedAController],
  providers: [MontedAService]
})
export class MontedAModule implements OnModuleInit, OnApplicationBootstrap {

  onApplicationBootstrap() {
    console.log('acmodule, onApplicationBootstrap');
  }
  onModuleInit() {
    console.log('acmodule, onModuleInit');
  }
}
