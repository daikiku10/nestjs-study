import { Cat } from 'src/domains/cat/cat.entity';
import { BaseEvent } from '../base.event';
import { CommonOmitProps } from 'src/common/types/common-omit-props';

export class CatUpdatedEvent extends BaseEvent<CatUpdatedEvent> {
  static EventName = 'cat.updated';

  static new(props: CommonOmitProps<CatUpdatedEvent>): CatUpdatedEvent {
    return new CatUpdatedEvent(props);
  }

  data: Cat[];
}
