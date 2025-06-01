import { Cron, CronOptions } from '@nestjs/schedule';
import { CronJobParams } from 'cron';

export function WorkerCron(
  cronTime: CronJobParams['cronTime'],
  options?: CronOptions,
): MethodDecorator {
  return Cron(cronTime, { ...(options ?? {}) });
}
