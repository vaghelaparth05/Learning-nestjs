import { IsNotEmpty, IsNumberString, IsString, ValidateNested } from "class-validator";
import { CustomerAddressDto } from "./CustomerAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {

    @IsNumberString()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    favouriteFood: string;

    @ValidateNested()
    @Type(() => CustomerAddressDto)
    @IsNotEmpty()
    address: CustomerAddressDto;
}