import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { WhatEatService } from './what-eat.service';
import { CreateFoodDto } from './dto/create-food.dto';

@Controller('what/eat')
export class WhatEatController {
  constructor(private readonly whatEatService: WhatEatService) { }

  @Get('init')
  async getInitialMenuList() {
    return this.whatEatService.getMenuList();
  }

  @Get('random')
  async getRandomFood(@Query('type') type: string) {
    return this.whatEatService.getRandomByType(type);
  }

  @Get(':id')
  async getMenuDetail(@Param('id') id: string) {
    return this.whatEatService.getFoodById(id);
  }

  @Post()
  async addMenu(@Body() createFoodDto: CreateFoodDto) {
    return this.whatEatService.createFood(createFoodDto);
  }
}