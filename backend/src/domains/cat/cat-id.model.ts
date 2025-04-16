import { EntityId } from 'src/common/models/entity-id.model';

/**
 * 猫ID
 */
export type CatId = EntityId<'Cat'> & string;
export function CatId(id: string): CatId {
  return id as CatId;
}
