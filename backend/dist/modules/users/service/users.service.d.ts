import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/createUser.dto';
import { Users } from '../entity/users.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    create(user: CreateUserDto): Promise<Users>;
    findOne(email: any): Promise<Users>;
    findAll(): Promise<Users[]>;
}
