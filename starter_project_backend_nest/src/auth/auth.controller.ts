import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './constants';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  // @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() req) {
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
