import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { findOne } from 'src/common/utils/typeorm/findOne';
import { CatId } from 'src/domains/cat/cat-id.model';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class GetCatUsecase {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: MongoRepository<Cat>,
  ) {}

  async execute(id: CatId) {
    const cat = await findOne(this.catRepository, {
      id,
    });

    if (!cat) {
      throw new NotFoundException('指定した猫が見つかりません');
    }

    return cat;
  }
}
