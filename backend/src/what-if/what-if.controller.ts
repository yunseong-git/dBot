import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WhatIfService } from './what-if.service';

@Controller('what/if')
export class WhatIfController {
  constructor(private readonly service: WhatIfService) {}

  @Post()
  async insert(@Body() body: any) {
    return this.service.insertAsset(body);
  }

  @Get(':type')
  async getOne(@Param('type') type: string) {
    return this.service.getAsset(type);
  }

  @Get()
  async getAll() {
    return this.service.getAllAssets();
  }
}