import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todo/todos.module';
import { ArticleModule } from './article/article.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   load: [config],
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (config: ConfigService) => ({
    //     uri: config.get<string>('MONGO_URI'),
    //   }),
    // }),

    TodosModule,
    ArticleModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'), // local databse .. there is no database specified
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
