import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import UserI from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    // console.log('Username: ', username, ' password: ', password);
    const user = await this.userService.findOne(username);
    // console.log('Found user: ', user);
    if (user && user.password == password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // console.log('Auth Service user: ', user);
    // console.log('Id: ', user._id.toString());
    const payload = { username: user.username, sub: user._id.toString() };
    // console.log('Auth Service Payload: ', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
