import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  private users = []; // 簡易的なデータストア

  @Query(() => String)
  hello(): string {
    console.log('呼び出し');
    return 'Hello, GraphQL!';
  }

  @Mutation(() => Object)
  createUser(@Args('name') name: string, @Args('age') age: number): any {
    const user = { id: Date.now().toString(), name, age };
    this.users.push(user);
    return user;
  }
}
