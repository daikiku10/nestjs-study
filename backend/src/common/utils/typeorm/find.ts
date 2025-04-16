import { MongoRepository, ObjectLiteral } from 'typeorm';

export async function find<Entity extends ObjectLiteral>(
  repository: MongoRepository<Entity>,
): Promise<Entity[]> {
  return repository.find();
}
