import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import hashPassword from 'src/utils/hashPassword';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}
   
  async signup(dto: AuthDto) {
    const { email, password } = dto;
    try {
        const userFound = await this.prisma.user.findUnique({ where: { email }});
        if (userFound) {
            throw new ConflictException("User already exists");
        }

        const hashedPassword = await hashPassword(password);
        await this.prisma.user.create(
            { data: {
                hashedPassword,
                email
            }}
        )
        return { message: "signup ok"}
    } catch (e) {
        return e.message
    }
  }

  
  async signin() {
    return { message: "signin ok"}
  }

  
  async signout() {
    return { message: "signout ok"}
  }
}
