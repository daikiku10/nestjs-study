import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { MongoEntityManager } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: MongoEntityManager,
  ) {}

  // TODO: private sessions = new Map<string, ClientSession>();

  async begin(): Promise<void> {
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
