import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

    const exists = await this.findOne(email);
    if (exists) {
      throw new ConflictException('User already Exist');
    }

    const newUser = await this.usermodel.create({
      fullName,
      email,
      password,
    });
    const { password: omit, ...user } = newUser;
    return user;
  }

  async getAllUser() {
    const users = await this.usermodel.find(
      {},
      { username: 1, firstName: 1, lastName: 1 },
    );
    return users;
  }

  async getUserById(id: string) {
    try {
      const user = await this.usermodel.findById(id, {
        username: 1,
        firstName: 1,
        lastName: 1,
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
      user.password = password || user.password;

      await user.save();
      return user;
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
