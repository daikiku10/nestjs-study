import { Injectable } from '@nestjs/common';
import { OnEventAsync } from 'src/common/decorators/on-event-async.decorator';
import { CatCreatedEvent } from 'src/events/cat/cat-created.event';

@Injectable()
export class CreateCatSubscriber {
  constructor() {}

  @OnEventAsync(CatCreatedEvent.EventName)
  async handle(event: CatCreatedEvent) {
    console.log('イベント発火', event.data);
  }
}
