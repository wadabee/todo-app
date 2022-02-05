import UserApi from 'src/api/User';

const useUser = () => {
  const getAllUsers = () => {
    return UserApi.getAllUsers();
  };

  const registerUser = (name: string) => {
    return UserApi.createUser(name);
  };

  const searchUserById = (id: number | undefined) => {
    return UserApi.searchUserById(id);
  };

  return {
    getAllUsers,
    registerUser,
    searchUserById,
  };
};

export default useUser;
