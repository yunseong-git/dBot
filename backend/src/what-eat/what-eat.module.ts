import { Module } from '@nestjs/common';
import { WhatEatService } from './what-eat.service';
import { WhatEatController } from './what-eat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Food, FoodSchema } from './schemas/food.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Food.name, schema: FoodSchema }]) // ✅ 이 줄 중요!
  ],
  providers: [WhatEatService],
  controllers: [WhatEatController]
})
export class WhatEatModule {}
