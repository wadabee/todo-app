import { User } from '@shared/types/User';
import { AxiosError } from 'axios';
import useSWR from 'swr';
import { fetcher, GetApiResponse } from './ApiUtils';

const UserApi = {
  getAllUsers: (): GetApiResponse<User[]> => {
    const { data, error } = useSWR<User[], AxiosError<User[]>>('/users', fetcher);
    return { data, error };
  },
};

export default UserApi;
