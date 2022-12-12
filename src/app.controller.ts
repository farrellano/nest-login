import { Controller, Request,Post,UseGuards,Get, RequestMapping, Param, Delete } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { FavsService } from './favs/favs.service';

@Controller()
export class AppController {

  constructor(private authService: AuthService,private favService: FavsService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getHello(@Request() req){
    return req.user;
  }


  @Post("fav/:id")
  async add(@Param("id") id: string) : Promise<any[]>{
    return this.favService.addFav(id);
  }
  

  @Delete("fav/:id")
  async delete(@Param("id") id: string) : Promise<any[]>{
    return this.favService.deleteFav(id);
  }

  @Get("all")
  async getAll() : Promise<any[]> {
    return this.favService.getAll();
  }
  
}
