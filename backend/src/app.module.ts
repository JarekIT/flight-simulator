import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './modules/cities/cities.module';
import { PlanesModule } from './modules/planes/planes.module';

@Module({
  imports: [CitiesModule, PlanesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
