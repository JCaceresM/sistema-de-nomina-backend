import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Login } from 'src/common/types/login.types';
import { JWTExpirationToken } from 'src/common/utils/date/extimation.date';
import { AppConfigService } from 'src/config/getterConfig.service';
import { EmployeesService } from 'src/db/api/employees/employees.service';
import { UsersService } from 'src/db/api/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private appConfigService: AppConfigService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUserName(username);

    const isMatch = user.length
      ? await bcrypt.compare(pass, user[0]?.password)
      : false;
    if (user && isMatch) {
      return { username: user[0].user_name, user_id: user[0].id };
    }
    return null;
  }

  async login(user: Login) {
    const payload = { username: user.username, user_id: user.user_id };
    return {
      access_token: this.jwtService.sign(payload),
      expiatedIn: JWTExpirationToken(this.appConfigService.get('EXPIRESIN')),
    };
  }
}
