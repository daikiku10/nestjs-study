import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  age: number;

  @Field(() => String, { nullable: true })
  breed?: string;
}
