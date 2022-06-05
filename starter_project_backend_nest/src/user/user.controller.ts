import {
  Body,
  Controller,
  Delete,
  Get,
  Request,
  Param,
  Patch,
  Post,
  UseInterceptors,
  UploadedFile,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from '../auth/constants';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get('/all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Public()
  @Get('/profiles/all')
  getAllUserProfiles() {
    return this.userService.getAllUserProfiles();
  }

  @Get('')
  getUser(@Request() req: any) {
    return this.userService.getUserById(req.user.userId);
  }

  @Get('profile')
  getUserProfile(@Request() req: any) {
    return this.userService.getUserProfile(req.user.userId);
  }

  @Delete('profile')
  deleteUserProfile(@Request() req: any) {
    return this.userService.deleteUserProfile(req.user.userId);
  }

  @Public()
  @Post()
  createUser(
    @Body('email') email: string,
    @Body('fullName') fullName: string,
    @Body('password') password: string,
  ) {
    return this.userService.createUser({ fullName, email, password });
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Patch(':id')
  updateUser(
    @Request() req: any,
    @Param('id') userId: string,
    @Body('email') email: string,
    @Body('fullName') fullName: string,
    @Body('password') password: string,
  ) {
    if (userId != req.user.userId) {
      throw new ForbiddenException();
    }
    return this.userService.updateUser(userId, email, fullName, password);
  }

  @Post('/uploadprofile')
  @UseInterceptors(FileInterceptor('image'))
  addProfileImage(
    @Request() req: any,
    @Body() { bio }: { bio: string },
    @UploadedFile() image: Express.Multer.File,
  ) {
    const userId = req.user.userId;

    return this.userService.addProfileImage(userId, bio, image);
  }

  @Delete(':id')
  deleteUser(@Request() req: any, @Param('id') userId: string) {
    if (userId != req.user.userId) {
      throw new ForbiddenException();
    }
    return this.userService.deleteUser(userId);
  }
}
