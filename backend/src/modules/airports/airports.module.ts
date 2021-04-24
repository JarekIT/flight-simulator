import { Module } from '@nestjs/common';
import { CitiesService } from './services/airports.service';
import { CitiesController } from './controllers/airports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AirportSchema } from './schema/airport.schema';

@Module({
  providers: [CitiesService],
  controllers: [CitiesController],
  //import mongoosemodule make injectable
  imports: [
    MongooseModule.forFeature([{ name: 'Airport', schema: AirportSchema }]),
  ],
})
export class CitiesModule {}
