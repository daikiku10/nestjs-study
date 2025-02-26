import { Injectable } from '@nestjs/common';
import { Cat } from '../repository/cat.schema';
import { Cat as CatDomain, CatType } from '../domain/cat';
import { CatsRepository } from '../repository/cat.repository';

@Injectable() // アプリケーション層
export class CatsService {
  constructor(private readonly catsRepo: CatsRepository) {}

  async create(name: string, age: number, breed: string): Promise<Cat> {
    // 受け取ったデータを使用してドメイン変換
    const catDomain = CatDomain.create(name, age, breed);

    // リポジトリ層へ依頼
    return this.catsRepo.insert(catDomain);
  }

  async findAll(): Promise<CatType[]> {
    // リポジトリ層へ依頼
    const result = await this.catsRepo.findAll();
    return result;
  }
}
