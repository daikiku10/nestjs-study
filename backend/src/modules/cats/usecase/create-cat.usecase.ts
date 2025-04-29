import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';
import { CreateCatInput } from '../models/create-cat.input';
import { bulkSave } from 'src/common/utils/typeorm/bulkSave';

@Injectable()
export class CreateCatUsecase {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: MongoRepository<Cat>,
  ) {}

  async execute(props: CreateCatInput) {
    const cat = Cat.new(props);

    await bulkSave(this.catRepository, [cat]);
    return cat;
  }
}
