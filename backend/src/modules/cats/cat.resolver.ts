import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './application/cats.service';
import { CatModel, CatRequest } from './interfaces/cat.model';

@Resolver()
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {
    console.log('CatsResolver生成', catsService);
  }

  @Query(() => [CatModel])
  async getAllCats(): Promise<CatModel[]> {
    try {
      const result = await this.catsService.findAll();
      let res: CatModel[] = [];
      result.forEach((item) => {
        const cat = {
          id: item.id,
          name: item.name,
          age: item.age,
          breed: item.breed,
        } satisfies CatModel;
        res = [...res, cat];
      });
      return res;
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  }
  @Query(() => CatModel)
  async getCatById(@Args('id') id: string): Promise<CatModel> {
    try {
      const result = await this.catsService.findCatById(id);
      const cat = {
        id: result.id,
        name: result.name,
        age: result.age,
        breed: result.breed,
      } satisfies CatModel;
      return cat;
    } catch (error) {
      console.log('error', error);
      return undefined;
    }
  }
  @Mutation(() => String)
  async createCat(@Args('input') input: CatRequest): Promise<string> {
    console.log('リクエスト');
    try {
      const result = await this.catsService.create(
        input.name,
        input.age,
        'スコティッシュ',
      );
      console.log(result);
      return '成功';
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
      const result = await this.catsService.update(id, name, age, breed);
      console.log(result);
      return '成功';
    } catch (error) {
      return error;
    }
  }
  @Mutation(() => String)
  async deleteCat(@Args('id') id: string) {
    try {
      await this.catsService.deleteCatById(id);
      return '削除成功';
    } catch (error) {
      return error;
    }
  }
}
