import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema, Cat } from './repository/cat.schema';
import { CatsUsecase } from './usecase/cats.usecase';
import { CatsResolver } from './cat.resolver';
import { CatsRepository } from './repository/cat.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver, CatsUsecase, CatsRepository],
})
export class CatsModule {}
