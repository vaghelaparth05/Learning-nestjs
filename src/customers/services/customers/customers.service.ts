import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { Customer } from 'src/customers/types/customer.type';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            name: 'parth',
            favouriteFood: 'pizza',
        },
        {
            id: 2,
            name: 'arya',
            favouriteFood: 'frankie',
        },
        {
            id: 3,
            name: 'sunita',
            favouriteFood: 'kheer',
        },
    ]

    public greetCustomer(): any{
        return {
            greeting: "hello customer",
            createdAt: new Date(),
        }
    }

    public searchCustomer(id: number): any{
        return this.customers.find((customers)=> customers.id === id);
    }

    public createCustomer(customerDetail: CreateCustomerDto){
        if(customerDetail){
            this.customers.push(customerDetail);
        }
    }

    public getAllCustomers(): Customer[]{
        return this.customers;
    }
}
