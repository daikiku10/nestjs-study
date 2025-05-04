import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { bulkSoftRemove } from 'src/common/utils/typeorm/bulkSoftRemove';
import { findOne } from 'src/common/utils/typeorm/findOne';
import { CatId } from 'src/domains/cat/cat-id.model';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';

@Injectable()
export class DeleteCatUsecase {
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

    await bulkSoftRemove(this.catRepository, [cat]);

    return true;
  }
}
