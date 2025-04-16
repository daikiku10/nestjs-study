import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { find } from 'src/common/utils/typeorm/find';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class GetCatsUsecase {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: MongoRepository<Cat>,
  ) {}

  async execute(): Promise<Cat[]> {
    const cats = await find(this.catRepository);
    return cats;
  }
}
