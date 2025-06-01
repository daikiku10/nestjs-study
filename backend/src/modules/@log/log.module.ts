import { Module } from '@nestjs/common';
import subscribers from './subscribers';

@Module({
  imports: [],
  providers: [...subscribers],
  exports: [],
})
export class LogModule {}
