import { Body, Controller, HttpCode, Post, Response } from '@nestjs/common'
import e from 'express'

import { AuthService } from './auth.service'
import { User as UserModel } from '@prisma/client'
import { AuthDto, AuthSignInDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signupUser(@Body() userData: AuthDto): Promise<UserModel> {
    return this.authService.createUser(userData)
  }

  @Post('signin')
  @HttpCode(200)
  async signinUser(@Body() userData: AuthSignInDto, @Response() response): Promise<e.Response> {
    return this.authService.user(userData, response)
  }

}
