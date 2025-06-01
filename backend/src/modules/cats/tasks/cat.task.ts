import { Injectable } from '@nestjs/common';
import { CronExpression } from '@nestjs/schedule';
import { WorkerCron } from 'src/common/decorators/worker-cron.decorator';

@Injectable()
export class CatTask {
  constructor() {}

  @WorkerCron(CronExpression.EVERY_10_MINUTES)
  execute() {
    console.log('cronTask', new Date().toISOString());
  }
}
