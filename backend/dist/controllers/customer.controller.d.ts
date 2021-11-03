import { Request } from "express";
import { CustomerService } from 'src/services/customer.service';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    createCustomer(nameOrganization: string, phoneNumber: string, financialDebt: number): Promise<{
        customer: any;
        message: string;
    }>;
    customers(request: Request): Promise<any>;
}
