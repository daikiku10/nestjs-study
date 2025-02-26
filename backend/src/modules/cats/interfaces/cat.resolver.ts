import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CatsService } from '../application/cats.service';
import { Cat } from 'src/graphql';

@Resolver() // プレゼンテーション層
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  // @Query(() => String)
  // async getCats(): Promise<string> {
  //   console.log('getCatsの呼び出し');
  //   try {
  //     const result = await this.catsService.findAll();
  //     console.log('result', result);
  //     return '成功';
  //   } catch (error) {
  //     console.log('error', error);
  //     return '失敗';
  //   }
  // }

  @Mutation(() => Object)
  async createCat(
    @Args('name') name: string,
    @Args('age') age: number,
  ): Promise<Cat> {
    try {
      const result = await this.catsService.create(name, age, 'スコティッシュ');
      return result;
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  }
}
