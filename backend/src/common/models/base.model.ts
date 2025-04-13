import { ObjectType } from '@nestjs/graphql';

@ObjectType({
  isAbstract: true,
})
export class BaseModel {
  constructor(props?: Partial<BaseModel>) {
    Object.assign(this, props);
  }
}
