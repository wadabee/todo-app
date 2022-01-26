import UserApi from 'src/api/User';

const useUser = () => {
  const getAllUsers = () => {
    return UserApi.getAllUsers();
  };

  const registerUser = (name: string) => {
    return UserApi.createUser(name);
  };

  return {
    getAllUsers,
    registerUser,
  };
};

export default useUser;
