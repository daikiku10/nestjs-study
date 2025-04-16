import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IdColumn } from 'src/common/decorators/property/id-column.decorator';
import { IntColumn } from 'src/common/decorators/property/int-column.decorator';
import { StringColumn } from 'src/common/decorators/property/string-column.decorator';
import { Entity } from 'typeorm';
import { generateUniqId } from 'src/common/utils/id/generateUniqId';
import { CatId } from './cat-id.model';
import { BaseEntity } from 'src/common/models/base.entity';

@Entity({ name: 'cat' })
@ObjectType()
export class Cat extends BaseEntity {
  constructor(props: Partial<Cat>) {
    super(props);
  }

  static new(props: Partial<Cat>) {
    const id = CatId(generateUniqId());
    return new Cat({ ...props, id });
  }

  @IdColumn({
    description: '猫ID',
  })
  id: string;

  @StringColumn({
    description: '名前',
  })
  name: string;

  @Field(() => Int)
  @IntColumn({
    description: '年齢',
  })
  age: number;

  @StringColumn({
    description: '品種',
    nullable: true,
  })
  breed?: string; // TODO stringではない方がより良い
}
