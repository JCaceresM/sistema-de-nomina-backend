import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { Credentials } from 'src/common/types/login.types';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiResponse({ status: 401, description: 'Unauthorized.'})
  @ApiResponse({ status: 201, description: 'authenticated.'})
  async login(@Body() body: Credentials, @Request() req) {
    return this.authService.login(req.user);
  }
}
