import { Module, ModuleMetadata } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbRoot } from 'src/config/mongodb.config';
import { CatsModule } from './modules/cats/cat.module';
import { ConfigModule } from '@nestjs/config';

function createMetadata(): ModuleMetadata {
  return {
    imports: [
      // Configモジュール
      ConfigModule.forRoot({
        envFilePath: ['.env.local', '.env'],
      }),
    ],
  };
}

// アプリケーションのルートモジュール
@Module({
  imports: [
    // graphql
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Apollo ServerをGraphQLのドライバーとして使用
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // コードファースト採用
      sortSchema: true,
      playground: true,
      installSubscriptionHandlers: true, // サブスクリプションを有効(廃止予定)
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    // Mongoose
    MongooseModule.forRoot(mongodbRoot),
    // catsモジュール
    CatsModule,
  ],
})
export class AppModule {}
