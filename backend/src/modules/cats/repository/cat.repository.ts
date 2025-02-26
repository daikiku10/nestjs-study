import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../repository/cat.schema';
import { Cat as CatDomain, CatType } from '../domain/cat';
import { Model } from 'mongoose';

@Injectable() // リポジトリ層
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  insert(cat: CatType) {
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  async findAll() {
    const result = await this.catModel.find().exec();
    let res: CatType[] = [];
    // ドメイン変換
    result.forEach((item) => {
      const cat = CatDomain.createForRepository(
        item.id,
        item.name,
        item.age,
        item.breed,
      );
      res = [...res, cat];
    });
    return res;
  }
}
