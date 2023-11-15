import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware).exclude({
      path: 'customers/create',
      method: RequestMethod.POST,
    }).forRoutes(CustomersController);
    // Replace CustomerController with below path to invoke specific path middlewares options
    // {
    //   path: 'customers/search/:id',
    //   method: RequestMethod.GET,
    // },{
    //   path: 'customers/all',
    //   method: RequestMethod.GET,
    // }
  }
}
