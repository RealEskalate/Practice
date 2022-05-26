import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY } from './constants';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  inject: [ConfigService],
  useFactory: (configservice: ConfigService): any => {
    console.log(configservice.get<string>('CLOUDINARY_CLOUD_NAME'));
    return cloudinary.config({
      cloud_name: configservice.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: configservice.get<string>('CLOUDINARY_API_KEY'),
      api_secret: configservice.get<string>('CLOUDINARY_API_SECRET'),
    });
  },
};
