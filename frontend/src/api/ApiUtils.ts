import axios, { AxiosError } from 'axios';

export type GetApiResponse<T, D = any> = {
  data: T | undefined;
  error: AxiosError<T, D> | undefined;
};

export const fetcher = (url: string) =>
  axios.get(`http://localhost:8000${url}`).then((res) => res.data);
