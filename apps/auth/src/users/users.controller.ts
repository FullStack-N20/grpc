import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { FindOneUserDto, UpdateUserDto, UserServiceController, UserServiceControllerMethods } from '@app/common';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  
  findAll() {
    return this.usersService.findAll();
  }

  findOne(findOneUserDto: FindOneUserDto) {
    return this.usersService.findOne(findOneUserDto.id);
  }

  updateUser(updateUserDto: UpdateUserDto) {
    return this.usersService.update(1, updateUserDto);
  }

  removeUser(findOneUserDto: FindOneUserDto) {
    return this.usersService.remove(findOneUserDto.id);
  }
}
