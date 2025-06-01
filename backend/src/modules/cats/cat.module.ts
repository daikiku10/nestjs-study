import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionModule } from '../@transaction/transaction.module';
import entities from './entities';
import resolvers from './resolvers';
import subscribers from './subscribers';
import usecase from './usecase';

@Module({
  imports: [TypeOrmModule.forFeature([...entities]), TransactionModule],
  providers: [...resolvers, ...usecase, ...subscribers],
})
export class CatsModule {}
