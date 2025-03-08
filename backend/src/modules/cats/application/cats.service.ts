import { Injectable } from '@nestjs/common';
import { Cat as CatDomain } from '../domain/cat';
import { CatsRepository } from '../repository/cat.repository';

@Injectable() // アプリケーション層
export class CatsService {
  constructor(private readonly catsRepository: CatsRepository) {
    console.log('CatsService生成');
  }

  async create(name: string, age: number, breed: string) {
    // 受け取ったデータを使用してドメイン変換
    const catDomain = CatDomain.create(name, age, breed);
    // リポジトリ層へ依頼
    return this.catsRepository.insert(catDomain);
  }
  async update(id: string, name: string, age: number, breed: string) {
    // 受け取ったデータを使用してドメイン変換
    const catDomain = CatDomain.createForRepository(id, name, age, breed);
    // リポジトリ層へ依頼
    try {
      return this.catsRepository.update(catDomain);
    } catch (e) {
      throw new Error(e);
    }
  }
  // async findAll() {
  //   // リポジトリ層へ依頼
  //   const result = await this.catsRepo.findAll();
  //   return result;
  // }
  // async findCatById(id: string) {
  //   // リポジトリ層へ依頼
  //   const result = await this.catsRepo.findCatById(id);
  //   return result;
  // }
  async deleteCatById(id: string) {
    // リポジトリ層へ依頼
    await this.catsRepository.delete(id);
    return;
  }
}
