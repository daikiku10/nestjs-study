import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';
import { UpdateCatInput } from '../models/update-cat.input';
import { findOne } from 'src/common/utils/typeorm/findOne';
import { TransactionService } from 'src/modules/@transaction/services/transaction.service';

@Injectable()
export class UpdateCatUsecase {
  constructor(
    private readonly transactionService: TransactionService,
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

    await this.transactionService.begin(async ({ bulkSave }) => {
      await bulkSave(this.catRepository, [cat]);
    });

    return cat;
  }
}
