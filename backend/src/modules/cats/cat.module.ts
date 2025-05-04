import { Module } from '@nestjs/common';
import { CatsResolver } from './cat.resolver';
import usecase from './usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { TransactionModule } from '../@transaction/transaction.module';

@Module({
  imports: [TypeOrmModule.forFeature([...entities]), TransactionModule],
  providers: [CatsResolver, ...usecase],
})
export class CatsModule {}
