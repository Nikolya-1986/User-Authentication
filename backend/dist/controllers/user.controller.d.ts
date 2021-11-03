import { JwtService } from '@nestjs/jwt';
import { Response, Request } from "express";
import { UserService } from 'src/services/user.service';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<any>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<any>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    users(request: Request): Promise<any>;
    usersEmail(request: Request): Promise<any>;
}
