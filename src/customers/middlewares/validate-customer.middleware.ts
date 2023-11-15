import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("Hello, I am inside validate customer middleware");
        next();
    }
}