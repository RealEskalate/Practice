import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import User from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly usermodel: Model<User>) {}

  async createUser(
    username: string,
    firstName: string,
    lastName: string,
    password: string,
  ) {
    const newUser = await this.usermodel.create({
      username,
      firstName,
      lastName,
      password,
    });
    return newUser;
    //throw new Error('Method not implemented.');
  }

  async getAllUser() {
    const users = await this.usermodel.find();
    //throw new Error('Method not implemented.');
  }

  async getUserById(id: string) {
    const user = await this.usermodel.findById(id);
    return user;
    //throw new Error('Method not implemented.');
  }

  async updateUser(
    userId: string,
    username: string,
    firstName: string,
    lastName: string,
    password: string,
  ) {
    try {
      const user = await this.usermodel.findById(userId);

      user.username = username || user.username;
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.password = password || user.password;

      await user.save();
    } catch (error) {
      throw new NotFoundException(error);
    }
    //throw new Error('Method not implemented.');
  }

  async deleteUser(id: string) {
    const user = await this.getUserById(id);
    if (user) {
      await this.usermodel.deleteOne({ _id: id });
    } else {
      throw new NotFoundException(`user with ${id} not found`);
    }
    // throw new Error('Method not implemented.');
  }
}
