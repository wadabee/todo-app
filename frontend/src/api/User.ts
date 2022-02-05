import { User, UserPostParams } from '@backend/types/User';
import { AxiosError } from 'axios';
import useSWR from 'swr';
import { fetcher, ApiResponse, post } from './ApiUtils';

const UserApi = {
  getAllUsers: (): ApiResponse<User[]> => {
    const { data, error } = useSWR<User[], AxiosError<User[]>>('/users', fetcher);
    return { data, error };
  },

  createUser: (name: string) => {
    return post<UserPostParams, User>('/users', { name: name });
  },

  searchUserById: (id: number | undefined): ApiResponse<User> => {
    const { data, error } = useSWR<User, AxiosError<User>>(id ? `/users/${id}` : null, fetcher);
    return { data, error };
  },
};

export default UserApi;
