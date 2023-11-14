import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService){}

    @Get('')
    greetHello(){
        return this.customerService.greetCustomer();
    }

    @Get('/search/:id')
    searchCustomerById(@Param('id', ParseIntPipe) id: number){
        const customer = this.customerService.searchCustomer(id);
        if(customer){
            return customer;
        } else{
            throw new HttpException('Customer noto foundo', HttpStatus.BAD_REQUEST);
        }
    }
}
