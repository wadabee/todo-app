import { Todo, TodoPostParams } from '@backend/@types/Todo';
import { AxiosError } from 'axios';
import useSWR from 'swr';
import { fetcher, ApiResponse, post } from './ApiUtils';

const TodoApi = {
  getAllTodos: (): ApiResponse<Todo[]> => {
    const { data, error } = useSWR<Todo[], AxiosError<Todo[]>>('/todo', fetcher);
    return { data, error };
  },

  createTodo: (params: TodoPostParams) => {
    return post<TodoPostParams, Todo>('/todo', params);
  },
};

export default TodoApi;
