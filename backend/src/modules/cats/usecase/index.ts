import { CatsUsecase } from './cats.usecase';
import { CreateCatUsecase } from './create-cat.usecase';
import { UpdateCatUsecase } from './update-cat.usecase';
import { GetCatsUsecase } from './get-cats.usecase';
import { GetCatUsecase } from './get-cat.usecase';

export default [
  CatsUsecase,
  GetCatUsecase,
  GetCatsUsecase,
  CreateCatUsecase,
  UpdateCatUsecase,
];
