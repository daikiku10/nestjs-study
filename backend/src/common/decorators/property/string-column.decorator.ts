import { Column } from 'typeorm';

export const StringColumn = (): PropertyDecorator => {
  return () => {
    Column({
      type: 'string',
    });
  };
};
