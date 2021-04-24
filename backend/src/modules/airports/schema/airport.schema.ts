import * as mongoose from 'mongoose';

export interface AirportModel {
  city: string;
  country: string;
  iata: string;
  id: string;
  lat: number;
  lng: number;
  name: string;
}

export type AirportDocument = AirportModel & mongoose.Document;

export const AirportSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  iata: { type: String, required: true },
  id: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  name: { type: String, required: true },
});

// export type AirportDocument = AirportModel & Document;

// @Schema()
// export class AirportModel {
//   @Prop({ required: true }) city: string;
//   @Prop({ required: true }) country: string;
//   @Prop({ required: true }) iata: string;
//   @Prop({ required: true }) id: string;
//   @Prop({ required: true }) lat: number;
//   @Prop({ required: true }) lng: number;
//   @Prop({ required: true }) name: string;
// }

// export const AirportSchema = SchemaFactory.createForClass(AirportModel);
