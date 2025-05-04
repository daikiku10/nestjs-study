import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetCatsUsecase } from '../usecase/get-cats.usecase';

import { Cat } from 'src/domains/cat/cat.entity';
import { CreateCatUsecase } from '../usecase/create-cat.usecase';
import { CreateCatInput } from '../models/create-cat.input';
import { UpdateCatInput } from '../models/update-cat.input';
import { UpdateCatUsecase } from '../usecase/update-cat.usecase';
import { CatId } from 'src/domains/cat/cat-id.model';
import { GetCatUsecase } from '../usecase/get-cat.usecase';
import { DeleteCatUsecase } from '../usecase/delete-cat.usecase';

@Resolver()
export class CatResolver {
  constructor(
    private readonly getCatUsecase: GetCatUsecase,
    private readonly getCatsUsecase: GetCatsUsecase,
    private readonly createCatUsecase: CreateCatUsecase,
    private readonly updateCatUsecase: UpdateCatUsecase,
    private readonly deleteCatUsecase: DeleteCatUsecase,
  ) {}

  @Query(() => [Cat])
  async getAllCats(): Promise<Cat[]> {
    return this.getCatsUsecase.execute();
  }

  @Query(() => Cat)
  async getCatById(@Args('id', { type: () => ID }) id: CatId): Promise<Cat> {
    return this.getCatUsecase.execute(id);
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
  async deleteCat(@Args('id', { type: () => ID }) id: CatId): Promise<boolean> {
    return this.deleteCatUsecase.execute(id);
  }
}
