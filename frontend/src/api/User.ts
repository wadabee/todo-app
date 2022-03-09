import { User, UserPostParams } from '@backend/@types/User';
import { AxiosError } from 'axios';
import { ApiResponse } from 'src/@types/ApiUtils';
import useSWR from 'swr';
import ApiUtils from './ApiUtils';

const UserApi = {
  getAllUsers: (): ApiResponse<User[]> => {
    const { data, error } = useSWR<User[], AxiosError<User[]>>('/users', ApiUtils.fetcher);
    return { data, error };
  },

  createUser: (name: string) => {
    return ApiUtils.post<UserPostParams, User>('/users', { name: name });
  },

  searchUserById: (id: number | undefined): ApiResponse<User> => {
    const { data, error } = useSWR<User, AxiosError<User>>(
      id ? `/users/${id}` : null,
      ApiUtils.fetcher,
    );
    return { data, error };
  },
};

export default UserApi;
