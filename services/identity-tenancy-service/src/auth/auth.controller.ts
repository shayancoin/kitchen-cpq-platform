import { Body, Controller, Post } from '@nestjs/common';
import type { Session } from '@kitchen-cpq/shared-types';
import { AuthService, type LoginDto } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto): Promise<Session> {
    return this.authService.login(body);
  }
}
