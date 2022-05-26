import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import slugify from 'slugify';
import multer from 'multer';
@Module({
  providers: [CloudinaryService, CloudinaryProvider],
  exports: [CloudinaryProvider, CloudinaryService],
  imports: [
    ConfigModule,
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
            const file_extn = file.mimetype.substring(6);
            const filename = `${file.originalname
              .toString()
              .substring(
                0,
                file.originalname.lastIndexOf('.'),
              )}-${Date.now()}.${file_extn}`;
            cb(null, slugify(filename.toLowerCase()));
          },
        },
      }),
    }),
  ],
})
export class CloudinaryModule {}
