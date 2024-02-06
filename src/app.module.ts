import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { OtherModule } from './other/other.module';
import { MontedAModule } from './monted-a/monted-a.module';
import { MontedBModule } from './monted-b/monted-b.module';
import { LogMiddleware } from './log.middleware';

@Module({
  imports: [PersonModule, OtherModule, MontedBModule, MontedAModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

  // 启用路由中间件 * 代表所有路由
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('*');
  }

}
