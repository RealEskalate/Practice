import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todo/todos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import config from './config/config';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import { CommentsModule } from './comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
      }),
    }),
    TodosModule,
    ArticleModule,
    AuthModule,
    UserModule,
    CategoryModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
