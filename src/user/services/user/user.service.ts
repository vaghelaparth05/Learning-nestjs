import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/user/types/user.type';

@Injectable()
export class UserService {
    private users: User[] = [
        {
            username: "parth",
            password: "123"
        },
        {
            username: "arya",
            password: "123"
        },
        {
            username: "yash",
            password: "123"
        }
    ];

    public getUsers(): User[]{
        return this.users.map((users) => new SerializedUser(users));
    }

    public getUserByUsername(username: string): User{
        return this.users.find((user) => user.username === username);
    }
}
