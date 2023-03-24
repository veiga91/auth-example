import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
   
  async signup(dto: AuthDto) {
    const { email, password } = dto;
    return { message: "signup ok"}
  }

  
  async signin() {
    return { message: "signin ok"}
  }

  
  async signout() {
    return { message: "signout ok"}
  }
}
