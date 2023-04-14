import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = this.userRepository.create({ username, password });
    
    await this.userRepository.save(user);
  }
}
