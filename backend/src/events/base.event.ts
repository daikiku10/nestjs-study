import { Optional } from 'utility-types';

export abstract class BaseEvent<T = any> {
  constructor(props?: Optional<BaseEvent & T>) {
    Object.assign(this, props);
  }

  data: any | any[];

  // TODO UserContextの作成
  //   ctx: UserContext;
}
