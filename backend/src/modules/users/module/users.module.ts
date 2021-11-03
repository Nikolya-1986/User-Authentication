import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from '../controller/users.controller';
import { Users } from '../entity/users.entity';
import { UsersService } from '../service/users.service';


@Module({
  imports: [ 
    TypeOrmModule.forFeature([Users]), 
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    }),
  ],
  controllers: [ UsersController ],
  providers: [ UsersService ],
})
export class UsersModule {}