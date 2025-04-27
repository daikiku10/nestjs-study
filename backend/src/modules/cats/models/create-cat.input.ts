import { InputType } from '@nestjs/graphql';
import { IntInput } from 'src/common/decorators/property/int-input.decorator';
import { StringInput } from 'src/common/decorators/property/string-input.decorator';

@InputType()
export class CreateCatInput {
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
