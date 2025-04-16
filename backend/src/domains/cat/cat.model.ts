import { ObjectType } from '@nestjs/graphql';
import { Cat } from './cat.entity';

@ObjectType()
export class CatModel extends Cat {}
