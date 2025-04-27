import { CommonInputOptions } from './common-input-options';
import { IdField } from './id-field.decorator';

export const IdInput = (options: CommonInputOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    IdField(options)(target, propertyKey);
  };
};
