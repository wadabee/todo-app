import UserRepo from '../repository/users';

class UserService {
  public getAllUsers() {
    return UserRepo.getAllUsers();
  }

  public getUserById(id: number) {
    return UserRepo.getUserById(id);
  }

  public createUser(name: string) {
    return UserRepo.createUser(name);
  }
}
export default UserService;
