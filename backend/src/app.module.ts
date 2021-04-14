import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
import { PlanesModule } from './planes/planes.module';

@Module({
  imports: [CitiesModule, PlanesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
