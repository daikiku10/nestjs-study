import { v4 as uuidv4 } from 'uuid';

export type CatType = {
  id: string;
  name: string;
  age: number;
  breed: string;
};

export class Cat implements CatType {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly age: number,
    public readonly breed: string,
  ) {}

  static create(name: string, age: number, breed: string): Cat {
    // バリデーションをここに追加
    return new Cat(uuidv4(), name, age, breed);
  }

  static createForRepository(
    id: string,
    name: string,
    age: number,
    breed: string,
  ): Cat {
    return new Cat(id, name, age, breed);
  }
}
