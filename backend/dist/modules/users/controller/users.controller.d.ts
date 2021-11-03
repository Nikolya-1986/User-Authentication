import { JwtService } from "@nestjs/jwt";
import { Response, Request } from "express";
import { UsersService } from "../service/users.service";
export declare class UsersController {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(name: string, email: string, password: string): Promise<{
        user: import("../entity/users.entity").Users;
        message: string;
    }>;
    login(email: string, password: string, response: Response): Promise<{
        message: string;
    }>;
    user(request: Request): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
    users(request: Request): Promise<import("../entity/users.entity").Users[]>;
    usersEmail(request: Request): Promise<import("../entity/users.entity").Users[]>;
}
