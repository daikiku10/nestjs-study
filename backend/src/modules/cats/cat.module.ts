import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema, Cat } from './repository/cat.schema';
import { CatsResolver } from './cat.resolver';
import { CatsRepository } from './repository/cat.repository';
import { CatDaService } from './service/cat.service';
import usecase from './usecase';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver, ...usecase, CatsRepository, CatDaService],
})
export class CatsModule {}
