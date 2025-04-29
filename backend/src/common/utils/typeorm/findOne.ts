import { FindOptions, MongoRepository, ObjectLiteral } from 'typeorm';

export async function findOne<Entity extends ObjectLiteral>(
  repository: MongoRepository<Entity>,
  conditions?: FindOptions<Entity> | ObjectLiteral,
) {
  return await repository.findOneBy({
    where: {
      ...(conditions ?? {}),
    },
  });
}
