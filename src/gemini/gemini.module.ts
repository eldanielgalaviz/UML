import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeminiController } from './gemini.controller';
import { GeminiService } from './gemini.service';

@Module({
  imports: [ConfigModule],
  controllers: [GeminiController],
  providers: [GeminiService],
})
export class GeminiModule {}
