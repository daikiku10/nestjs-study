import { Module } from '@nestjs/common';
import usecase from './usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';
import { TransactionModule } from '../@transaction/transaction.module';
import resolvers from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([...entities]), TransactionModule],
  providers: [...resolvers, ...usecase],
})
export class CatsModule {}
