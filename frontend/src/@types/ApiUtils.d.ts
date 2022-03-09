import { AxiosError } from 'axios';

export type ApiResponse<T, D = any> = {
  data: T | undefined;
  error: AxiosError<T, D> | undefined;
};
