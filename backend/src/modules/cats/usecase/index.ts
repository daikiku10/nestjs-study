import { CatsUsecase } from './cats.usecase';
import { CreateCatUsecase } from './create-cat.usecase';
import { UpdateCatUsecase } from './update-cat.usecase';
import { GetCatsUsecase } from './get-cats.usecase';

export default [
  CatsUsecase,
  GetCatsUsecase,
  CreateCatUsecase,
  UpdateCatUsecase,
];
