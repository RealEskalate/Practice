import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import slugify from 'slugify';
import multer from 'multer';
import path from 'path';
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
  ],
})
export class CloudinaryModule {}
