import { Module } from '@nestjs/common';
import services from './services';

@Module({
  providers: [...services],
})
export class TransactionModule {}
