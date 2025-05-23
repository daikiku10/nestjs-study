import { Module } from '@nestjs/common';
import services from './services';

@Module({
  imports: [],
  providers: [...services],
  exports: [...services],
})
export class TransactionModule {}
