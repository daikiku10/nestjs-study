import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from '../application/cats.service';
import { Cat } from 'src/graphql';

@Resolver() // プレゼンテーション層
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(() => Object)
  async getAllCats(): Promise<Cat[]> {
    try {
      const result = await this.catsService.findAll();
      let res: Cat[] = [];
      result.forEach((item) => {
        const cat = {
          id: item.id,
          name: item.name,
          age: item.age,
          breed: item.breed,
        } satisfies Cat;
        res = [...res, cat];
      });
      return res;
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  }

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
