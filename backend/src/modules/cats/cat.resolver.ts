import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetCatsUsecase } from './usecase/get-cats.usecase';

import { Cat } from 'src/domains/cat/cat.entity';
import { CatModel } from 'src/domains/cat/cat.model';
import { CreateCatUsecase } from './usecase/create-cat.usecase';
import { CreateCatInput } from './models/create-cat.input';
import { UpdateCatInput } from './models/update-cat.input';
import { UpdateCatUsecase } from './usecase/update-cat.usecase';

@Resolver()
export class CatsResolver {
  constructor(
    private readonly getCatsUsecase: GetCatsUsecase,
    private readonly createCatUsecase: CreateCatUsecase,
    private readonly updateCatUsecase: UpdateCatUsecase,
  ) {}

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

  @Mutation(() => Cat)
  async createCat(@Args('props') props: CreateCatInput): Promise<Cat> {
    return this.createCatUsecase.execute(props);
  }

  @Mutation(() => Cat)
  async updateCat(@Args('props') props: UpdateCatInput) {
    return this.updateCatUsecase.execute(props);
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
