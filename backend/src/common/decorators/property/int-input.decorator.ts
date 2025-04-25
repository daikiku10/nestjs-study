import { CommonInputOptions } from './common-input-options';
import { IntField } from './int-field.decorator';

export const IntInput = (options: CommonInputOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    IntField(options)(target, propertyKey);
  };
};
