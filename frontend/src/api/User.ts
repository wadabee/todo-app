import { User, UserPostParams } from '@shared/types/User';
import { AxiosError } from 'axios';
import useSWR, { mutate } from 'swr';
import { fetcher, ApiResponse, post } from './ApiUtils';

const UserApi = {
  getAllUsers: (): ApiResponse<User[]> => {
    const { data, error } = useSWR<User[], AxiosError<User[]>>('/users', fetcher);
    return { data, error };
  },

  createUser: (name: string) => {
    return mutate('/users', () => {
      return post<UserPostParams>('/users', { name: name });
    });
  },
};

export default UserApi;
