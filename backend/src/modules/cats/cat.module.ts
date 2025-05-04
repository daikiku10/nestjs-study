import { Module } from '@nestjs/common';
import { CatsResolver } from './cat.resolver';
import usecase from './usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([...entities])],
  providers: [CatsResolver, ...usecase],
})
export class CatsModule {}
