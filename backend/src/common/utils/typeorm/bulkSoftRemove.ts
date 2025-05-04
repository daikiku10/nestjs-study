import { BulkWriteOptions, MongoRepository, ObjectLiteral } from 'typeorm';

export async function bulkSoftRemove<Entity extends ObjectLiteral>(
  repository: MongoRepository<Entity>,
  entities: Entity[],
  options?: BulkWriteOptions,
) {
  if (entities.length === 0) {
    return;
  }

  // TODO: ctxから受け取るようにする
  const now = new Date();

  return repository.bulkWrite(
    entities.map((entity) => ({
      updateOne: {
        filter: { id: entity.id },
        update: {
          $set: {
            deletedAt: now,
          },
        },
      },
    })),
    options,
  );
}
