import { Repository } from 'typeorm';
import { Customer } from 'src/entityes/customer.entity';
export declare class CustomerService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    create(data: any): Promise<Customer>;
    findOne(condition: any): Promise<Customer>;
    findAll(): Promise<Customer[]>;
}
