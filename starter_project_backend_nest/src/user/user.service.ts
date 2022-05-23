import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import UserI from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly usermodel: Model<UserI>) {}

  async createUser(email: string, fullName: string, password: string) {
    const saltOrRounds = 10;
    const hashed_password = await bcrypt.hash(password, saltOrRounds);
    password = hashed_password;

    const newUser = await this.usermodel.create({
      fullName,
      email,
      password,
    });
    return newUser;
  }

  async getAllUser() {
    const users = await this.usermodel.find();
    return users;
  }

  async getUserById(id: string) {
    const user = await this.usermodel.findById(id);
    return user;
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
      user.password = password || user.password;

      await user.save();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async deleteUser(id: string) {
    const user = await this.getUserById(id);
    if (user) {
      await this.usermodel.deleteOne({ _id: id });
    } else {
      throw new NotFoundException(`user with ${id} not found`);
    }
  }
}
