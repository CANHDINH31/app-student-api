import { Controller, Get, Post, Body, Patch, Param, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('/')
  findAll(@Req() req) {
    return this.usersService.findAll(req?.user?.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch('/change-info')
  changeInfo(@Body() updateUserDto: UpdateUserDto, @Req() req) {
    return this.usersService.changeInfo(updateUserDto, req?.user?._id);
  }

  @Post('/delete-user')
  remove(@Body() deleteUserDto: DeleteUserDto, @Req() req) {
    return this.usersService.remove(deleteUserDto, req?.user?.role);
  }
}
