import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import config from '../config/config';
import { ConfigService } from '@nestjs/config';
import { CloudinaryProvider } from './cloudinary.provider';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  constructor(private configservice: ConfigService) {}
  async uploadImage(file: Express.Multer.File): Promise<any> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {
          folder: this.configservice.get<string>('IMAGE_FOLDER_NAME'),
        },
        (error, result) => {
          if (error) {
            console.log(error);
            return reject(error);
          }
          resolve(result);
        },
      );
      toStream(file.buffer).pipe(upload);
    });
  }
}
