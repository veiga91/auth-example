import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
	@IsString()
	@Length(3, 20, { message: "Password has to be min 3 and max 20 chars"})
  public password: string;
}