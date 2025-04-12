import { NonFunctionKeys, ReadonlyKeys, SetDifference } from 'utility-types';

export declare type Props<T extends object> = Pick<
  T,
  SetDifference<NonFunctionKeys<T>, ReadonlyKeys<T>> // TODO コメント
>;
