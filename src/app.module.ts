import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CustomersModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
