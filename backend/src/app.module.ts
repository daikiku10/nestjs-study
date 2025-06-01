import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module, ModuleMetadata } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mongodbRoot } from 'src/config/mongodb.config';
import { LogModule } from './modules/@log/log.module';
import { CatsModule } from './modules/cats/cat.module';

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
      // typeormモジュール
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          console.log('Typeorm生成');
          return {
            type: 'mongodb',
            database: configService.get('MONGO_DATABASE'),
            url: `mongodb+srv://${configService.get('MONGO_USER')}:${configService.get('MONGO_PASSWORD')}@${configService.get('APP_NAME')}.h2v5z.mongodb.net/?retryWrites=true&w=majority&appName=${configService.get('APP_NAME')}`,
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            autoLoadEntities: true,
            // migrations:
            // migrationsRun:
            // synchronize: true,
            // logging:
          };
        },
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
      LogModule,
      // catsモジュール
      CatsModule,
    ],
  };
}

// アプリケーションのルートモジュール
@Module(createMetadata())
export class AppModule {}
