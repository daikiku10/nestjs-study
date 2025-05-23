import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { bulkSave } from 'src/common/utils/typeorm/bulkSave';
import { bulkSoftRemove } from 'src/common/utils/typeorm/bulkSoftRemove';
import { MongoEntityManager, MongoRepository } from 'typeorm';

type BulkOperations = {
  bulkSave: typeof bulkSave;
  bulkSoftRemove: typeof bulkSoftRemove;
};

type TransactionFunction = (props: BulkOperations) => Promise<void>;

@Injectable()
export class TransactionService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: MongoEntityManager,
  ) {}

  // TODO: private sessions = new Map<string, ClientSession>();

  async begin(func: TransactionFunction): Promise<void> {
    // TODO: セッションの再利用を試みる(別々で呼ばれた場合に、同じトランザクションにならない)
    // セッションの作成
    const session =
      this.entityManager.mongoQueryRunner.databaseConnection.startSession();

    const isTopTransaction = !session.inTransaction();

    if (isTopTransaction) {
      session.startTransaction();
      console.log('トップレベルのトランザクションを開始しました。');
    } else {
      console.log('すでにトランザクションが開始されています。');
    }

    try {
      const runner = new BulkOperationRunner(this.entityManager);
      await func(runner.getBulkOperations());
      if (isTopTransaction) {
        await session.commitTransaction();
      }
    } catch (e) {
      if (isTopTransaction) {
        await session.abortTransaction();
      }
      throw e;
    } finally {
      if (isTopTransaction) {
        await session.endSession();
      }
    }
  }
}

class BulkOperationRunner {
  constructor(private readonly entityManager: MongoEntityManager) {}

  public getBulkOperations(): BulkOperations {
    return {
      bulkSave: this.bulkSave.bind(this),
      bulkSoftRemove: this.bulkSoftRemove.bind(this),
    };
  }

  async bulkSave<Entity>(
    repository: MongoRepository<Entity>,
    entities: Entity[],
  ) {
    await bulkSave(repository, entities);
  }

  async bulkSoftRemove(repository: MongoRepository<any>, entities: any[]) {
    await bulkSoftRemove(repository, entities);
  }

  // NOTE: EntityTargetの場合は必要になってくる？
  // private getRepository<Entity>(repository: MongoRepository<Entity>) {
  //   return this.entityManager.getMongoRepository(repository.target);
  // }
}
