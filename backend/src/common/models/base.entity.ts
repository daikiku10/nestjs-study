import { HideField, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Optional } from 'utility-types';
import { DeleteDateColumn, ObjectIdColumn } from 'typeorm';
import { IdColumn } from '../decorators/property/id-column.decorator';
import { generateUniqId } from '../utils/id/generateUniqId';
import { assignDefined } from '../utils/object/assignDefined';
import { DateField } from '../decorators/property/date-field.decorator';

@ObjectType({
  isAbstract: true,
})
export class BaseEntity<T = any> extends BaseModel {
  constructor(
    props?: Optional<BaseEntity & T>,
    id?: (props: Optional<BaseEntity & T>) => { keys: string | string[] },
  ) {
    console.log('id', id); // TODO: 使用する
    super(props);
    if (props) {
      this._id = this.id = props.id || generateUniqId();
    }
    this.deletedAt = props?.deletedAt ?? null;
  }

  /**
   * _ID
   */
  @ObjectIdColumn({ type: 'string' })
  @HideField()
  _id: any; // TODO: anyでリントエラーになるようにと、ApiHidePropertyの追加

  /**
   * ID
   */
  @IdColumn({
    description: 'ID',
  })
  id: string;

  /**
   * 削除日時
   */
  @DeleteDateColumn()
  @DateField({
    description: '削除日時',
    nullable: true,
  })
  deletedAt?: Date | null;

  protected update(props: Partial<BaseEntity & T>) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, id, ...rest } = props;
    assignDefined(this, rest);
  }
}
