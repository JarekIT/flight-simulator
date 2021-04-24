import { Injectable } from '@nestjs/common';
import { Airport } from '../entity/airport.entity';
import * as airportsJson from '../db/airports.json';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AirportDocument, AirportModel } from '../schema/airport.schema';
/**
 * 1) Get Airports from MongoDB
 * 2) pick random X Airports
 * 3) Store them in local Array
 * 4) getAirports return stored airports
 */
@Injectable()
export class CitiesService {
    this.initCities();
  constructor(
    @InjectModel('Airport')
    private readonly airportModel: Model<AirportDocument>,
  }

  private readonly allCities: Airport[] = [];
  async getAirportsFromMongoDb() {
    let airportsFromDb: AirportModel[] = [];

    try {
      airportsFromDb = await this.airportModel.find().exec();
    } catch (error) {
      console.error(error);
      airportsFromDb = airportsJson;
    }

    const airportsLimited: Airport[] = this.getLimitedNumberOfRandomAirports(
      airportsFromDb,
    );

  getCities(): Airport[] {
    return this.allCities;
  }

  private initCities() {
    for (let i = 0; i < 100; i++) {
      const id = Math.floor(Math.random() * airportsJson.length);
      const airport = airportsJson[id];

      this.allCities.push(
        new Airport(
          airport.id,
          airport.name,
          airport.country,
          airport.city,
          airport.iata,
          {
            lat: airport.lat,
            lng: airport.lng,
          },
        ),
      );
  private getLimitedNumberOfRandomAirports(
    airports: AirportModel[],
  ): Airport[] {
    const numberOfAirports: number = initSettings.numberOfAirports;

    const airportsLimited: Airport[] = [];

    for (let i = 0; i < numberOfAirports; i++) {
      const index = Math.floor(Math.random() * airports.length);
      const randomAirport: AirportModel = airports[index];
      airports.splice(index, 1);

      airportsLimited.push(this.createAirportEntityFromModel(randomAirport));
    }

    return airportsLimited;
  }

  private createAirportEntityFromModel(randomAirport: AirportModel): Airport {
    return new Airport(
      randomAirport.id,
      randomAirport.name,
      randomAirport.country,
      randomAirport.city,
      randomAirport.iata,
      {
        lat: randomAirport.lat,
        lng: randomAirport.lng,
      },
    );
  }
}
