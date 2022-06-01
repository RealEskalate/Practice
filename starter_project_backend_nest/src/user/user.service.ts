import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, mongo } from 'mongoose';
import UserI from './user.model';
import UserProfileI from './userProfile.model';
import * as bcrypt from 'bcrypt';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly usermodel: Model<UserI>,
    @InjectModel('UserProfile')
    private readonly userprofilemodel: Model<UserProfileI>,
    private cloudinary: CloudinaryService,
  ) {}

  async createUser(fullName: string, email: string, password: string) {
    const saltOrRounds = 10;
    const hashed_password = await bcrypt.hash(password, saltOrRounds);
    password = hashed_password;

    const exists = await this.findOne(email);
    if (exists) {
      throw new ConflictException('User already Exist');
    }

    const newUser: any = await this.usermodel.create({
      fullName: fullName,
      email: email,
      password: password,
    });
    const { password: omit, ...user } = newUser._doc;
    return user;
  }

  async getAllUser() {
    const users = await this.usermodel.find({}, { fullname: 1, email: 1 });
    return users;
  }

  async addProfileImage(userId, bio, image: Express.Multer.File) {
    const res = await this.cloudinary.uploadImage(image);
    const url = res.url;
    const id = new mongo.ObjectId(userId);
    const userProfileImage = await this.userprofilemodel.updateOne(
      { userId: id },
      {
        $set: {
          userId: id,
          bio: bio,
          imageUrl: url,
        },
      },
      { upsert: true },
    );
    const userprofile = await this.userprofilemodel.find({ userId: id });
    return userprofile;
  }

  async getUserById(id: string) {
    try {
      const user = await this.usermodel.findById(id, {
        email: 1,
        fullName: 1,
      });
      return user;
    } catch (e) {
      throw new NotFoundException("User by that id doesn't exist");
    }
  }


  async findOne(email: string) {
    const user = await this.usermodel.findOne({ email: email });
    return user;
  }

  async updateUser(
    userId: string,
    email: string,
    fullName: string,
    password: string,
  ) {
    try {
      const user = await this.usermodel.findById(userId);
      user.email = email || user.email;
      user.fullName = fullName || user.fullName;
      if (password) {
        const saltOrRounds = 10;
        const hashed_password = await bcrypt.hash(password, saltOrRounds);
        user.password = hashed_password;
      }

      await user.save();
      const result = await this.usermodel.findById(userId);
      return result;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async deleteUser(id: string) {
    try {
      const user = await this.getUserById(id);
      await this.usermodel.deleteOne({ _id: id });
    } catch (e) {
      throw new NotFoundException(`user with ${id} not found`);
    }
  }
}
