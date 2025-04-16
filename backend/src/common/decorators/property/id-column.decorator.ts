import { Column, Index } from 'typeorm';
import { IdField } from './id-field.decorator';
import { CommonFieldOptions } from './common-field-options';

export const IdColumn = (options: CommonFieldOptions): PropertyDecorator => {
  return (target: string, propertyKey: string | symbol) => {
    IdField(options)(target, propertyKey);
    Column({
      type: 'string',
    })(target, propertyKey);
    Index()(target, propertyKey);
  };
};
