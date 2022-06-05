import {
  ConflictException,
  Injectable,
  ForbiddenException,
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
    const users = await this.usermodel.find(
      {},
      { fullname: 1, email: 1, profile: 1 },
    );
    return users;
  }

  async getAllUserProfiles() {
    const profiles = await this.userprofilemodel.find({});
    return profiles;
  }

  async addProfileImage(
    userId: string,
    bio: string,
    image: Express.Multer.File,
  ) {
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

    const userprofile = await this.userprofilemodel.findOne({ userId: id });

    //adding profile id to user
    let user = await this.usermodel.findById(userId);
    user.profile = userprofile._id;
    await user.save();
    return userprofile;
  }

  async deleteProfileById(userId: string, profileId: string) {
    try {
      const userProfile = await this.userprofilemodel.findById(profileId);
      if (!userProfile)
        throw new NotFoundException(`profile with ${profileId} not found`);
      console.log(userProfile.userId, userId);
      if (userProfile.userId.toString() != userId) {
        throw new ForbiddenException(
          'Only the the user can delete his profile',
        );
      }
      const res = await this.userprofilemodel.findByIdAndDelete(profileId);
      return res; // deleted as success respose
    } catch (e) {
      throw e;
    }
  }

  async getUserById(id: string) {
    try {
      const user = await this.usermodel.findById(id, {
        email: 1,
        fullName: 1,
        profile: 1,
      });
      if (!user) {
        throw new NotFoundException("User by that id doesn't exist");
      }
      return user;
    } catch (e) {
      throw e;
    }
  }

  async getUserProfileById(profileId: string) {
    try {
      const profile = await this.userprofilemodel.findById(profileId);
      if (!profile)
        throw new NotFoundException("profile by that id doesn't exist");

      return profile;
    } catch (e) {
      throw e;
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
      const user = await this.usermodel.findById(id);
      if (!user) throw new NotFoundException(`user with ${id} not found`);

      await this.usermodel.deleteOne({ _id: id });
      try {
        this.deleteProfileById(id, user.profile);
      } catch (e) {} //do nothing//

      return user;
    } catch (e) {
      throw e;
    }
  }
}
