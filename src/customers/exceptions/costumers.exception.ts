import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomerNotFoundException extends HttpException{
    constructor(msg?: string, status?: HttpStatus){
        super(msg || 'Customer Not found', status || HttpStatus.BAD_REQUEST);
    }
}