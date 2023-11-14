import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
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

    @Post('create')
    createCustomer(@Body() customerDetails: CreateCustomerDto) {
        this.customerService.createCustomer(customerDetails);
    }

    @Get('all')
    getAllCustomers(){
        const customers = this.customerService.getAllCustomers();
        console.log(customers);
    }
}
