import { User } from '@backend/types/User';
import UserApi from 'src/api/User';
import { mutate } from 'swr';

const useUser = () => {
  const getAllUsers = () => {
    return UserApi.getAllUsers();
  };

  const mutateUsers = (user: User) => {
    return mutate<User[]>('/users', [user]);
  };

  const registerUser = (name: string) => {
    return UserApi.createUser(name);
  };

  const searchUserById = (id: number | undefined) => {
    return UserApi.searchUserById(id);
  };

  return {
    getAllUsers,
    mutateUsers,
    registerUser,
    searchUserById,
  };
};

export default useUser;
