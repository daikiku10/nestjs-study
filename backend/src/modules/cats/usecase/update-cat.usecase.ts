import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';
import { UpdateCatInput } from '../models/update-cat.input';
import { findOne } from 'src/common/utils/typeorm/findOne';
import { bulkSave } from 'src/common/utils/typeorm/bulkSave';

@Injectable()
export class UpdateCatUsecase {
  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: MongoRepository<Cat>,
  ) {}

  async execute(props: UpdateCatInput) {
    const cat = await findOne(this.catRepository, {
      id: props.id,
    });

    if (!cat) {
      throw new NotFoundException('指定した猫が見つかりません');
    }

    cat.update(props);

    await bulkSave(this.catRepository, [cat]);

    return cat;
  }
}
