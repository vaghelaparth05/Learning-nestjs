import { IsNotEmpty, IsNumberString, IsString } from "class-validator";

export class CustomerAddressDto {
    @IsNotEmpty()
    @IsString()
    line1: string;

    line2?: string;

    @IsNumberString()
    @IsNotEmpty()
    zip: number;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    country: string;
}