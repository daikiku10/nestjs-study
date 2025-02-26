import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbRoot } from 'src/config/mongodb.config';
import { CatsModule } from './modules/cats/cat.module';

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
    // Mongoose
    MongooseModule.forRoot(mongodbRoot),
    // catsモジュール
    CatsModule,
  ],
})
export class AppModule {}
