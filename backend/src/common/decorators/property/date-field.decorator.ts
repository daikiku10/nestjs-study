import { Field, GraphQLISODateTime } from '@nestjs/graphql';
import { CommonFieldOptions } from './common-field-options';

export const DateField = (option: CommonFieldOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    Field(() => GraphQLISODateTime, {
      description: option.description,
      nullable: option.nullable,
    })(target, propertyKey);
  };
};
