import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) // createdAt, updatedAt 자동 추가
export class Food extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  type: string; // 한식, 중식 등

  @Prop([String])
  basic: string[]; // 기본 재료

  @Prop([String])
  extra: string[]; // 추가 재료

  @Prop()
  recipe: string; // 조리법 설명

  @Prop([String])
  hot: string[]; // 관련 맛집 이름 리스트
}

export const FoodSchema = SchemaFactory.createForClass(Food);