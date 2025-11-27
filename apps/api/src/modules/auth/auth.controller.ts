import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import type { Session } from '@kitchen-cpq/shared-types';
import { AuthService, type LoginRequest } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: LoginRequest): Session {
    return this.authService.login(body);
  }

  @Get('session')
  session(@Req() req: { headers: Record<string, string | string[] | undefined> }): Session {
    return this.authService.sessionFromHeaders(req.headers);
  }
}
