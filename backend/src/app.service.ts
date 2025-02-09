import { Injectable } from '@nestjs/common';

// 単一のメソッドを持つ基本的なサービス
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
