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
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // コードファースト採用
      playground: true,
    }),
    // Mongoose
    MongooseModule.forRoot(mongodbRoot),
    // catsモジュール
    CatsModule,
  ],
})
export class AppModule {}
