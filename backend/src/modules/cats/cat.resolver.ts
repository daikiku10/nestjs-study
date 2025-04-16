import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsUsecase } from './usecase/cats.usecase';
import { GetCatsUsecase } from './usecase/get-cats.usecase';

import { Cat } from 'src/domains/cat/cat.entity';
import { CatModel } from 'src/domains/cat/cat.model';

@Resolver()
export class CatsResolver {
  constructor(
    private readonly catsService: CatsUsecase,
    private readonly getCatsUsecase: GetCatsUsecase,
  ) {
    console.log('CatsResolver生成', catsService);
  }

  @Query(() => [CatModel])
  async getAllCats(): Promise<Cat[]> {
    return this.getCatsUsecase.execute();
  }

  @Query(() => CatModel)
  async getCatById(@Args('id') id: string): Promise<CatModel> {
    try {
      console.log('getCatById', id);
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  }
  @Mutation(() => String)
  async createCat(@Args('input') input: string): Promise<string> {
    try {
      console.log('createCat', input);
    } catch (error) {
      console.log('error', error);
      return error;
    }
  }

  @Mutation(() => String)
  async updateCat(
    @Args('id') id: string,
    @Args('name') name: string,
    @Args('age') age: number,
    @Args('breed') breed: string,
  ) {
    try {
      console.log('updateCat', id, name, age, breed);
    } catch (error) {
      return error;
    }
  }
  @Mutation(() => String)
  async deleteCat(@Args('id') id: string) {
    try {
      console.log('deleteCat', id);
    } catch (error) {
      return error;
    }
  }
}
