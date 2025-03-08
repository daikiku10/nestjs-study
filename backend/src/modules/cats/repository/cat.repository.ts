import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../repository/cat.schema';
import { Cat as CatDomain, CatType } from '../domain/cat';
import { Model } from 'mongoose';

@Injectable() // リポジトリ層
export class CatsRepository {
  constructor(@InjectModel(Cat.name) private catDocument: Model<Cat>) {
    console.log(Cat.name);
    console.log(catDocument);
    console.log('CatsRepository生成');
  }
  insert(cat: CatType) {
    const createdCat = new this.catDocument(cat);
    return createdCat.save();
  }
  async update(cat: CatType) {
    const updateObj = await this.catDocument.findOne({ id: cat.id }).exec();
    if (!updateObj) {
      throw new Error('更新対象が見つかりませんでした。');
    }
    await updateObj
      .updateOne({
        name: cat.name,
        age: cat.age,
        breed: cat.breed,
      })
      .exec();
    return updateObj;
  }
  //   async findAll() {
  //     const result = await this.catModel.find().exec();
  //     let res: CatType[] = [];
  //     // ドメイン変換
  //     result.forEach((item) => {
  //       const cat = CatDomain.createForRepository(
  //         item.id,
  //         item.name,
  //         item.age,
  //         item.breed,
  //       );
  //       res = [...res, cat];
  //     });
  //     return res;
  //   }
  async findCatById(id: string) {
    const result = await this.catDocument.findOne({ id: id }).exec();
    // ドメイン変換
    const res = CatDomain.createForRepository(
      result.id,
      result.name,
      result.age,
      result.breed,
    );
    return res;
  }
  async delete(id: string) {
    this.catDocument.deleteOne({ id: id }).exec();
  }
}
