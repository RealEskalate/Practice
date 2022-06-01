import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import UserI from '../user/user.model';
import { Console } from 'console';
import { throws } from 'assert';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!user) {
      return new NotFoundException();
    }
    console.log('validate user: ', user);
    const isCorrect = await bcrypt.compare(password, user.password);

    if (user && isCorrect) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    user = await this.validateUser(user.email, user.password);
    if (!user) {
      return new UnauthorizedException();
    }
    user = user._doc;
    const payload = { email: user.email, sub: user._id.toString() };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
