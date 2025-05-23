import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';
import { CreateCatInput } from '../models/create-cat.input';
import { TransactionService } from 'src/modules/@transaction/services/transaction.service';

@Injectable()
export class CreateCatUsecase {
  constructor(
    private readonly transactionService: TransactionService,
    @InjectRepository(Cat)
    private readonly catRepository: MongoRepository<Cat>,
  ) {}

  async execute(props: CreateCatInput) {
    const cat = Cat.new(props);

    await this.transactionService.begin(async ({ bulkSave }) => {
      await bulkSave(this.catRepository, [cat]);
    });

    return cat;
  }
}
