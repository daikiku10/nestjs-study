import { Field, ID } from '@nestjs/graphql';
import { CommonFieldOptions } from './common-field-options';

export const IdField = (options: CommonFieldOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    Field(() => ID, {
      description: options.description,
      nullable: options.nullable,
    })(target, propertyKey);
  };
};
