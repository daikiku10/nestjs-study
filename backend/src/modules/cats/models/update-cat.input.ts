import { InputType } from '@nestjs/graphql';
import { IdInput } from 'src/common/decorators/property/id-input.decorator';
import { IntInput } from 'src/common/decorators/property/int-input.decorator';
import { StringInput } from 'src/common/decorators/property/string-input.decorator';
import { CatId } from 'src/domains/cat/cat-id.model';

@InputType()
export class UpdateCatInput {
  @IdInput({
    description: 'ID',
  })
  id: CatId;

  @StringInput({
    description: '猫の名前',
  })
  name: string;

  @IntInput({
    description: '猫の年齢',
  })
  age: number;

  @StringInput({
    description: '品種',
    nullable: true,
  })
  breed?: string;
}
