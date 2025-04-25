import { CommonInputOptions } from './common-input-options';
import { StringField } from './string-field.decorator';

export const StringInput = (options: CommonInputOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    StringField(options)(target, propertyKey);
  };
};
