import { Injectable, OnModuleInit } from '@nestjs/common';
import { User, CreateUserDto, UpdateUserDto} from '@app/common';

@Injectable()
export class UsersService  implements OnModuleInit {
  private readonly users: User[] = [];

  onModuleInit() {
    
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
