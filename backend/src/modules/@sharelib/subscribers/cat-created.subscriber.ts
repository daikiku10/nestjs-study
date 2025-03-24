import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class CatCreatedSubscriber {
  constructor() {}

  @OnEvent('cat.created', { async: true })
  async catCreated(e): Promise<void> {
    console.log('eventAsync発火');
    console.log('e', e);
    return;
  }
}
