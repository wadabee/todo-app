import { User } from '@prisma/client';
import UserRepo from '../repository/users';

class UserService {
  public getAllUsers(): Promise<User[]> {
    return UserRepo.getAllUsers();
  }

  public getUserById(id: number): Promise<User | null> {
    return UserRepo.getUserById(id);
  }

  public createUser(name: string): Promise<User> {
    return UserRepo.createUser(name);
  }
}
export default UserService;
