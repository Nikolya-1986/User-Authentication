import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from '../dto/createUser.dto';
import { Users } from '../entity/users.entity';


@Injectable()
export class UsersService {
    
  constructor(
    @InjectRepository(Users) private readonly userRepository: Repository<Users>
  ) {}
  
   
  async create(user: CreateUserDto): Promise<Users> {
    return this.userRepository.save(user)
  }

  async findOne(email: any): Promise<Users> {
    return this.userRepository.findOne(email)
  }

  async findAll(): Promise<Users[]> {
    return this.userRepository.find()
  }
  
}