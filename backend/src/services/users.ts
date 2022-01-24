import UserRepo from "../repository/users";

const UserService = {
  getAllUsers: () => {
    return UserRepo.getAllUsers();
  },

  getUserById: (id: number) => {
    return UserRepo.getUserById(id);
  },

  createUser: (name: string) => {
    return UserRepo.createUser(name);
  },
};
export default UserService;
