import { BaseEvent } from '../base.event';

export class CatCreatedEvent extends BaseEvent<CatCreatedEvent> {
  static EventName = 'cat.created';

  static new(props: CatCreatedEvent): CatCreatedEvent {
    return new CatCreatedEvent();
  }

  // TODO: data
}
