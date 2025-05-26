import { Props } from './props';

export type CommonOmitProps<T extends object> = Omit<
  Props<T>,
  '_id' | 'id' | 'deletedAt'
>;
