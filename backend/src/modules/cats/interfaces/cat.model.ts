import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;

  @Field(() => String, { nullable: true })
  breed?: string;
}

@InputType()
export class CatRequest {
  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: number;
}
