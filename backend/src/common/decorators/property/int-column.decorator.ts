import { Column } from 'typeorm';
import { IntField } from './int-field.decorator';
import { CommonFieldOptions } from './common-field-options';

export const IntColumn = (options: CommonFieldOptions): PropertyDecorator => {
  return (target: string, propertyKey: string | symbol) => {
    IntField(options)(target, propertyKey);
    Column({
      type: 'int',
    })(target, propertyKey);
  };
};
