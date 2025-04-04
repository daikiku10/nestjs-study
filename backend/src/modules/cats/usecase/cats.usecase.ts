import { Injectable } from '@nestjs/common';
import { Cat as CatDomain } from '../domain/cat';
import { CatsRepository } from '../repository/cat.repository';
import { CatDaService } from '../service/cat.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable() // アプリケーション層
export class CatsUsecase {
  constructor(
    private readonly catsRepository: CatsRepository,
    private readonly catsDaService: CatDaService,
    private readonly eventEmitter: EventEmitter2,
  ) {
    console.log('CatsUsecase生成');
  }

  async create(name: string, age: number, breed: string) {
    // 受け取ったデータを使用してドメイン変換
    const catDomain = CatDomain.create(name, age, breed);
    // イベント仮登録
    await this.eventEmitter.emitAsync('cat.created', 'testDaiki');
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
  async findAll() {
    // リポジトリ層へ依頼
    this.catsDaService.execute();
    const result = await this.catsRepository.findAll();
    return result;
  }
  async findCatById(id: string) {
    // リポジトリ層へ依頼
    const result = await this.catsRepository.findCatById(id);
    return result;
  }
  async deleteCatById(id: string) {
    // リポジトリ層へ依頼
    await this.catsRepository.delete(id);
    return;
  }
}
