import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Request,
  Param,
  Patch,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Public } from '../auth/constants';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get('/all')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Public()
  @Post()
  createUser(
    @Body('email') email: string,
    @Body('fullName') fullName: string,
    @Body('password') password: string,
  ) {
    return this.userService.createUser(fullName, email, password);
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
  @Patch(':id')
  updateUser(
    @Param('id') userId: string,
    @Body('email') email: string,
    @Body('fullName') fullName: string,
    @Body('password') password: string,
  ) {
    return this.userService.updateUser(userId, email, fullName, password);
  }

  @Post('/uploadprofile')
  @UseInterceptors(FileInterceptor('image'))
  addArticle(
    @Request() req: any,
    @Body() { bio }: { bio: string },
    @UploadedFile() image: Express.Multer.File,
  ) {
    const userId = req.user.userId;

    return this.userService.addProfileImage(userId, bio, image);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    return this.userService.deleteUser(userId);
  }
}
