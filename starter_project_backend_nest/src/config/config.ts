import { HttpException, HttpStatus } from '@nestjs/common';
import { registerAs } from '@nestjs/config';
import multer from 'multer';
import { extname } from 'path';
import slugify from 'slugify';

export const secret = registerAs('SECRET_KEY', () => ({
  SECRET_KEY: process.env.SECRET_KEY,
}));

export default registerAs('database', () => ({
  uri: process.env.MONGO_URI,
}));

export const cloud_name = registerAs('cloud_name', () => ({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
}));

export const cloud_secret_key = registerAs('cloud_secret_key', () => ({
  cloud_secret_key: process.env.CLOUDINARY_API_SECRET,
}));

export const cloud_api_key = registerAs('cloud_api_key', () => ({
  cloud_api_key: process.env.CLOUDINARY_API_SECRET,
}));

export const multerConfig = {
  dest: process.env.UPLOAD_LOCATION,
};

export const image_folder_name = registerAs('image_folder_name', () => ({
  image_folder_name: process.env.IMAGE_FOLDER_NAME,
}));
// Multer upload options
export const multerOptions = {
  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      // Allow storage of file
      cb(null, true);
    } else {
      // Reject file
      cb(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
};
