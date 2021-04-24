import { Module } from '@nestjs/common';
import { AirportsService } from './services/airports.service';
import { AirportsController } from './controllers/airports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AirportSchema } from './schema/airport.schema';

@Module({
  //import mongoosemodule make injectable
  imports: [
    MongooseModule.forFeature([{ name: 'Airport', schema: AirportSchema }]),
  ],
  providers: [AirportsService],
  controllers: [AirportsController],
})
export class AirportsModule {}
