import { Cat } from 'src/domains/cat/cat.entity';
import { BaseEvent } from '../base.event';
import { CommonOmitProps } from 'src/common/types/common-omit-props';

export class CatDeletedEvent extends BaseEvent<CatDeletedEvent> {
  static EventName = 'cat.deleted';

  static new(props: CommonOmitProps<CatDeletedEvent>): CatDeletedEvent {
    return new CatDeletedEvent(props);
  }

  data: Cat[];
}
