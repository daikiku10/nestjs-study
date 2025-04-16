import { Field } from '@nestjs/graphql';
import { CommonFieldOptions } from './common-field-options';
import { GraphQLInt } from 'graphql';

export const IntField = (options: CommonFieldOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    Field(() => GraphQLInt, {
      description: options.description,
      nullable: options.nullable,
    })(target, propertyKey);
  };
};
