import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { findOne } from 'src/common/utils/typeorm/findOne';
import { CatId } from 'src/domains/cat/cat-id.model';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';
import { TransactionService } from 'src/modules/@transaction/services/transaction.service';

@Injectable()
export class DeleteCatUsecase {
  constructor(
    private readonly transactionService: TransactionService,
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

    await this.transactionService.begin(async ({ bulkSoftRemove }) => {
      await bulkSoftRemove(this.catRepository, [cat]);
    });

    return true;
  }
}
