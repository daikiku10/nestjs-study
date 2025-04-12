import { Props } from './props';

export type ConstructorProps<T extends object> = Partial<Props<T>>;
