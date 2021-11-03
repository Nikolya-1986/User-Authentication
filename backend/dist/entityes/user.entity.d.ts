import { Customer } from './customer.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    customers: Customer[];
}
