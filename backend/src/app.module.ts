import { Module, ModuleMetadata } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { mongodbRoot } from 'src/config/mongodb.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CatsModule } from './modules/cats/cat.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SharelibModule } from './modules/@sharelib/sharelib.module';

function createMetadata(): ModuleMetadata {
  return {
    imports: [
      // Configモジュール
      ConfigModule.forRoot({
        envFilePath: ['.env.local', '.env'],
      }),
      // イベント駆動サポートのモジュール
      EventEmitterModule.forRoot({
        wildcard: true,
      }),
      // graphQLモジュール
      GraphQLModule.forRootAsync<ApolloDriverConfig>({
        driver: ApolloDriver, // Apollo ServerをGraphQLのドライバーとして使用
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          console.log('graphql-factory', configService);
          return {
            playground: true,
            autoSchemaFile: {
              path: 'src/schema.gql',
            },
          };
        },
      }),
      // Mongoose
      MongooseModule.forRoot(mongodbRoot),
      // catsモジュール
      CatsModule,
      SharelibModule,
    ],
  };
}

// アプリケーションのルートモジュール
@Module(createMetadata())
export class AppModule {}
