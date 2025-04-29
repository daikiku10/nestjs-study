import { BaseEntity } from 'src/common/models/base.entity';

export function assignDefined(target: BaseEntity, ...sources: any) {
  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const value = source[key];
      if (value !== undefined) {
        target[key] = value;
      }
    }
  }

  return target;
}
