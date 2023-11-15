import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, UseInterceptors } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';
import { SerializedUser } from 'src/user/types/user.type';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/all')
    getAllCustomers(){
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    getUserByUsername(@Param('username') username: string){
        const user = this.userService.getUserByUsername(username);
        if(user){
            return new SerializedUser(user);
        } else{
            throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
        }
    }
}
