import axios, { AxiosRequestConfig } from 'axios';

let baseURL: string = '';
if (process.env.REACT_APP_USE_MOCK === 'true') {
  baseURL = '';
} else {
  baseURL = 'http://localhost:8000';
}

const axios_ = axios.create({
  baseURL: baseURL,
});

const ApiUtils = {
  fetcher: (url: string, cfg: AxiosRequestConfig | undefined = undefined) =>
    axios_.get(url, cfg).then((res) => res.data),

  post: <T, R = any>(
    url: string,
    data: T,
    cfg: AxiosRequestConfig | undefined = undefined,
  ): Promise<R> => axios_.post(url, data, cfg).then((res) => res.data),

  put: <T, R = any>(
    url: string,
    data: T,
    cfg: AxiosRequestConfig | undefined = undefined,
  ): Promise<R> => axios_.put(url, data, cfg).then((res) => res.data),

  delete: (url: string, cfg: AxiosRequestConfig | undefined = undefined) =>
    axios_.delete(url, cfg).then((res) => res.data),
};

export default ApiUtils;
