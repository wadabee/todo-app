import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export type ApiResponse<T, D = any> = {
  data: T | undefined;
  error: AxiosError<T, D> | undefined;
};

const axios_ = axios.create({
  baseURL: 'http://localhost:8000',
});

export const fetcher = (url: string, cfg: AxiosRequestConfig | undefined = undefined) =>
  axios_.get(url, cfg).then((res) => res.data);

export const post = <T, R = any>(
  url: string,
  data: T,
  cfg: AxiosRequestConfig | undefined = undefined,
): Promise<R> => axios_.post(url, data, cfg).then((res) => res.data);
