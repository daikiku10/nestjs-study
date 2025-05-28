import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { findOne } from 'src/common/utils/typeorm/findOne';
import { CatId } from 'src/domains/cat/cat-id.model';
import { Cat } from 'src/domains/cat/cat.entity';
import { MongoRepository } from 'typeorm';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { TransactionService } from 'src/modules/@transaction/services/transaction.service';
import { CatDeletedEvent } from 'src/events/cat/cat-deleted.event';

@Injectable()
export class DeleteCatUsecase {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly eventEmitter: EventEmitter2,
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

      await this.eventEmitter.emitAsync(
        CatDeletedEvent.EventName,
        new CatDeletedEvent({
          data: [cat],
        }),
      );
    });

    return true;
  }
}
