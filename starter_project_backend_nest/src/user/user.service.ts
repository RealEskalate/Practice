import {
  ConflictException,
  Injectable,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
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

  async createUser({
    fullName,
    email,
    password,
  }: {
    fullName: string;
    email: string;
    password: string;
  }) {
    const saltOrRounds = 10;
    const hashed_password = await bcrypt.hash(password, saltOrRounds);
    password = hashed_password;

    const exists = await this.findByEmail(email);
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
    const users = await this.usermodel
      .find({}, { fullname: 1, email: 1, profileId: 1 })
      .populate('profileId', '-userId')
      .lean();
    return users;
  }

  async addProfileImage(
    userId: string,
    bio: string,
    image: Express.Multer.File,
  ) {
    try {
      const res = await this.cloudinary.uploadImage(image);
      const url = res.url;
      const id = new mongo.ObjectId(userId);
      await this.userprofilemodel.updateOne(
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

      const userprofile = await this.userprofilemodel.findOne({ userId: id });

      //adding profile id to user
      const user = await this.usermodel.findById(userId);
      user.profileId = userprofile._id;
      await user.save();
      return userprofile;
    } catch (e) {
      throw e;
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.usermodel
        .findById(id, {
          email: 1,
          fullName: 1,
          profileId: 1,
        })
        .populate('profileId', '-userId')
        .lean();
      if (!user) {
        throw new NotFoundException("User by that id doesn't exist");
      }
      return user;
    } catch (e) {
      throw e;
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.usermodel.findOne({ email: email });
      if (!user) {
        throw new NotFoundException("User by that email doesn't exist");
      }
      return user;
    } catch (e) {
      throw e;
    }
  }

  async updateUser({
    userId,
    email,
    fullName,
    password,
  }: {
    userId?: string;
    email?: string;
    fullName?: string;
    password?: string;
  }) {
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
      const user = await this.usermodel.findById(id);
      if (!user) throw new NotFoundException(`user with ${id} not found`);

      if (user.profileId)
        await this.userprofilemodel.findByIdAndDelete(user.profileId);

      await this.usermodel.deleteOne({ _id: id });
      return {};
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async getAllUserProfiles() {
    try {
      const profiles = await this.userprofilemodel.find({});
      return profiles;
    } catch (e) {
      throw new InternalServerErrorException();
    }
  }

  async getUserProfile(userId: string) {
    try {
      const user = await this.usermodel.findById(userId);
      if (!user || !user.profileId)
        throw new BadRequestException("user don't have profile");
      const profileId = user.profileId;

      const profile = await this.userprofilemodel.findById(profileId);
      if (!profile) throw new NotFoundException("user don't have profile");
      return profile;
    } catch (e) {
      throw e;
    }
  }

  async deleteUserProfile(userId: string) {
    try {
      const user = await this.usermodel.findById(userId);
      if (!user || !user.profileId)
        throw new BadRequestException("user don't have profile");
      const profileId = user.profileId;

      const profile = await this.userprofilemodel.findByIdAndDelete(profileId);
      user.profileId = null;
      user.save();
      return profile;
    } catch (e) {
      throw e;
    }
  }
}
