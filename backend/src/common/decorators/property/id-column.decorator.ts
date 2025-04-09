import { Column, Index } from 'typeorm';

export const IdColumn = (): PropertyDecorator => {
  return (target: string, propertyKey: string | symbol) => {
    console.log('target', target);
    console.log('propertyKey', propertyKey);
    Column({
      type: 'string',
    });
    Index()(target, propertyKey);
  };
};
