import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { WhatEatModule } from './what-eat/what-eat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './what-do/chat/chat.module';
import { WhatDoModule } from './what-do/what-do.module';
import { WhatIfModule } from './what-if/what-if.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    WhatEatModule,
    ChatModule,
    WhatDoModule,
    WhatIfModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
