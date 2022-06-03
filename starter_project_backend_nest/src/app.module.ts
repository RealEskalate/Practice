import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todo/todos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import config from './config/config';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { ArticleModule } from './article/article.module';
import { CommentsModule } from './comment/comment.module';
import { MulterModule } from '@nestjs/platform-express';
import path from 'path';

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
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        fileFilter: (req, file, cb) => {
          if (!file.mimetype.match(/png||jpeg||jpg||gif$i/)) {
            cb(new Error('File does not support'), true);
            return;
          }
          cb(null, true);
        },
        storage: {
          filename: (_req, file, cb) => {
            // Allowed ext
            const filetypes = /jpeg|jpg|png|gif/;
            // Check ext
            const extname = filetypes.test(
              path.extname(file.originalname).toLowerCase(),
            );
            // Check mime
            const mimetype = filetypes.test(file.mimetype);

            if (mimetype && extname) {
              return cb(null, true);
            } else {
              cb('Error: Images Only!');
            }
          },
        },
        limits: {
          fields: 5,
          fieldNameSize: 50, // TODO: Check if this size is enough
          fieldSize: 20000, //TODO: Check if this size is enough
          // TODO: Change this line after compression
          fileSize: 15000000, // 150 KB for a 1080x1080 JPG 90
        },
      }),
    }),
    TodosModule,
    ArticleModule,
    AuthModule,
    UserModule,
    CategoryModule,
    CommentsModule,
    CloudinaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
