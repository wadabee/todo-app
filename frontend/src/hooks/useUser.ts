import UserApi from 'src/api/User';

const useUser = () => {
  const getAllUsers = () => {
    return UserApi.getAllUsers();
  };

  return {
    getAllUsers,
  };
};

export default useUser;
