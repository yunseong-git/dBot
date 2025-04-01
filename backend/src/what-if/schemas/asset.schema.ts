import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssetDocument = Asset & Document;

@Schema()
export class Asset {
  @Prop({ required: true, unique: true })
  type: string; // 예: 'bitcoin', 'gold', 'kospi'

  @Prop({ required: true })
  name: string; // 한글 이름

  @Prop({ required: true, type: [{ year: Number, month: Number, price: Number }] })
  record: { year: number; month: number; price: number }[];
}

export const AssetSchema = SchemaFactory.createForClass(Asset);