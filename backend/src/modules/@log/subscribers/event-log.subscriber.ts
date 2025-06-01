import { Injectable } from '@nestjs/common';
import { OnEventAsync } from 'src/common/decorators/on-event-async.decorator';
import { BaseEvent } from 'src/events/base.event';

@Injectable()
export class EventLogSubscriber {
  constructor() {}

  @OnEventAsync('**')
  async handle(event: BaseEvent) {
    console.log('全体発火のイベント', event.data);
  }
}
