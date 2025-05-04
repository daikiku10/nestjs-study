import { CreateCatUsecase } from './create-cat.usecase';
import { UpdateCatUsecase } from './update-cat.usecase';
import { GetCatsUsecase } from './get-cats.usecase';
import { GetCatUsecase } from './get-cat.usecase';
import { DeleteCatUsecase } from './delete-cat.usecase';

export default [
  GetCatUsecase,
  GetCatsUsecase,
  CreateCatUsecase,
  UpdateCatUsecase,
  DeleteCatUsecase,
];
