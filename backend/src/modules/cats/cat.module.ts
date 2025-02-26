import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema, Cat } from './repository/cat.schema';
import { CatsService } from './application/cats.service';
import { CatsResolver } from './interfaces/cat.resolver';
import { CatsRepository } from './repository/cat.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  providers: [CatsResolver, CatsService, CatsRepository],
})
export class CatsModule {}
