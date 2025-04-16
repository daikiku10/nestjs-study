import { Field } from '@nestjs/graphql';
import { CommonFieldOptions } from './common-field-options';
import { GraphQLString } from 'graphql';

export const StringField = (options: CommonFieldOptions): PropertyDecorator => {
  return (target: object, propertyKey: string | symbol) => {
    Field(() => GraphQLString, {
      description: options.description,
      nullable: options.nullable,
    })(target, propertyKey);
  };
};
