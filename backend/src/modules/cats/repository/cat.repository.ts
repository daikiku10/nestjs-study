import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../repository/cat.schema';
import { CatType } from '../domain/cat';
import { Model } from 'mongoose';

@Injectable() // リポジトリ層
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  insert(cat: CatType) {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }
}
