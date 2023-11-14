import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    private users = [
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
        return this.users.find((user)=> user.id === id);
    }
}
