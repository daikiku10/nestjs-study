import { BulkWriteOptions, MongoRepository, ObjectLiteral } from 'typeorm';

export async function bulkSave<Entity extends ObjectLiteral>(
  repository: MongoRepository<Entity>,
  entities: Entity[],
  options?: BulkWriteOptions,
) {
  if (entities.length === 0) {
    return;
  }

  return repository.bulkWrite(
    entities.map((entity) => ({
      updateOne: {
        filter: { id: entity.id },
        update: {
          $set: {
            ...entity,
          },
        },
        upsert: true,
      },
    })),
    options,
  );
}
