import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WhatIfService } from './what-if.service';
import { WhatIfController } from './what-if.controller';
import { Asset, AssetSchema } from './schemas/asset.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Asset.name, schema: AssetSchema }]),
  ],
  controllers: [WhatIfController],
  providers: [WhatIfService],
})
export class WhatIfModule {}