import { Cat } from 'src/domains/cat/cat.entity';
import { BaseEvent } from '../base.event';
import { CommonOmitProps } from 'src/common/types/common-omit-props';

export class CatCreatedEvent extends BaseEvent<CatCreatedEvent> {
  static EventName = 'cat.created';

  static new(props: CommonOmitProps<CatCreatedEvent>): CatCreatedEvent {
    return new CatCreatedEvent(props);
  }

  data: Cat[];
}
