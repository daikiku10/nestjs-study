import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import { AppResolver } from './app.resolver';

// アプリケーションのルートモジュール
@Module({
  imports: [
    // graphql
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Apollo ServerをGraphQLのドライバーとして使用
      typePaths: ['./**/*.graphql'], // .graphql スキーマファイルを対象にする
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'), // スキーマから TypeScript の型定義を自動生成
        outputAs: 'class', // 生成する型を class 形式にする
      },
    }),
  ],
  providers: [AppResolver, AppService],
})
export class AppModule {}
