import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FavsService } from './favs/favs.service';
import { FavsModule } from './favs/favs.module';

@Module({
  imports: [AuthModule, UsersModule, FavsModule],
  controllers: [AppController],
  providers: [AppService, FavsService],
})
export class AppModule {}
