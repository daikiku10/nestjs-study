export abstract class BaseEvent<T = any> {
  constructor() {}

  data: any | any[];

  // TODO UserContextの作成
  //   ctx: UserContext;
}
