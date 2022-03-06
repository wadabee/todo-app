import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export type ApiResponse<T, D = any> = {
  data: T | undefined;
  error: AxiosError<T, D> | undefined;
};

let baseURL: string = '';
if (process.env.REACT_APP_USE_MOCK === 'true') {
  baseURL = '';
} else {
  baseURL = 'http://localhost:8000';
}

const axios_ = axios.create({
  baseURL: baseURL,
});

export const fetcher = (url: string, cfg: AxiosRequestConfig | undefined = undefined) =>
  axios_.get(url, cfg).then((res) => res.data);

export const post = <T, R = any>(
  url: string,
  data: T,
  cfg: AxiosRequestConfig | undefined = undefined,
): Promise<R> => axios_.post(url, data, cfg).then((res) => res.data);

export const put = <T, R = any>(
  url: string,
  data: T,
  cfg: AxiosRequestConfig | undefined = undefined,
): Promise<R> => axios_.put(url, data, cfg).then((res) => res.data);
