import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  async signup(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('role') role: string = 'user',
  ) {
    const existing = await this.userService.findByUsername(username);
    if (existing) {
      throw new BadRequestException('Username already exists');
    }
    const user = await this.userService.create(username, password, role);
    return { message: 'User created', user };
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }
    const token = await this.authService.login(user);
    return { message: 'Login successful', ...token };
  }
}
