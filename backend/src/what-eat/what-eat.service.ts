import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dto/create-food.dto';

@Injectable()
export class WhatEatService {
    constructor(
        @InjectModel(Food.name) private readonly foodModel: Model<Food>,
    ) { }

    async getMenuList() {
        const foods = await this.foodModel.find({}, 'name type').exec();
        // 'name type' → 원하는 필드만 조회 (최적화)

        return foods.map((food) => ({
            id: food._id,
            name: food.name,
            type: food.type,
        }));
    }

    async getFoodById(id: string) {
        const food = await this.foodModel.findById(id).exec();
        if (!food) {
            throw new Error(`음식을 찾을 수 없습니다: ${id}`);
        }
        return food;
    }

    async createFood(dto: CreateFoodDto) {
        const created = new this.foodModel(dto);
        return created.save();
    }
}