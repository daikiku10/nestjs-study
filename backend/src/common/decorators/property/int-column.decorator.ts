import { Column } from 'typeorm';

export const IntColumn = (): PropertyDecorator => {
  return () => {
    Column({
      type: 'int',
    });
  };
};
