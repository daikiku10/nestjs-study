import { Column } from 'typeorm';
import { StringField } from './string-field.decorator';
import { CommonFieldOptions } from './common-field-options';

export const StringColumn = (
  options: CommonFieldOptions,
): PropertyDecorator => {
  return (target: string, propertyKey: string | symbol) => {
    StringField(options)(target, propertyKey);
    Column({
      type: 'string',
    })(target, propertyKey);
  };
};
