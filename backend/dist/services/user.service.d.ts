import { Repository } from 'typeorm';
import { User } from 'src/entityes/user.entity';
export declare class UserService {
    private readonly UserRepository;
    constructor(UserRepository: Repository<User>);
    create(data: any): Promise<User>;
    findOne(condition: any): Promise<User>;
    findAll(): Promise<User[]>;
}
