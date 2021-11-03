import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Response, Request } from "express";
import * as bcrypt from 'bcrypt';

import { UsersService } from "../service/users.service";


@Controller('api')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
    ) {}

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
  ) {

    const emailUser = await this.usersService.findOne({email});
    if(emailUser) {
      throw new BadRequestException("This email is already registered")
    }
    
    const handhedPassword = await bcrypt.hash(password, 12); 
    const user = await this.usersService.create({
      name,
      email,
      password: handhedPassword
    });

    delete user.password

    return {
      user,
      message: 'You are successfully registered'
    }
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    
    const user = await this.usersService.findOne({email});

    // if(!user) {
    //   throw new BadRequestException('Email not found')
    // }
    if (!user) {
      throw new BadRequestException('Invalid email')
    }

    if(!await bcrypt.compare(password, user.password)) {
      throw new BadRequestException('Invalid password')
    }

    const jwt = await this.jwtService.signAsync({id: user.id})
    
    response.cookie('jwt', jwt, { httpOnly: true })
    return {
      message: 'You are successfully logging in'
    }
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];
      const data = await this.jwtService.verifyAsync(cookie)
    
      if(!data) {
        throw new UnauthorizedException();
      }

      const user = await this.usersService.findOne({id: data['id']});
      const { password, ...result } = user

      return result;
    } catch (e) {
      throw new UnauthorizedException('You need to log in');
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt')

    return {
      message: 'User is logged out'
    }
  }

  @Get('users')
  async users(@Req() request: Request){
    return this.usersService.findAll();
  }

  @Get('usersEmail')
  async usersEmail(@Req() request: Request){
    return this.usersService.findAll();
  }
}