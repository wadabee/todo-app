import {
  TaskPostParams,
  Todo,
  TodoAndTask,
  TodoPostParams,
  TodoPutParams,
} from '@backend/@types/Todo';
import { AxiosError } from 'axios';
import { ApiResponse } from 'src/@types/ApiUtils';
import useSWR, { mutate } from 'swr';
import ApiUtils from './ApiUtils';

const TodoApi = {
  getAllTodos: (): ApiResponse<TodoAndTask[]> => {
    const { data, error } = useSWR<TodoAndTask[], AxiosError<TodoAndTask[]>>(
      '/todo',
      ApiUtils.fetcher,
    );
    return { data, error };
  },

  createTodo: (params: TodoPostParams) => {
    return ApiUtils.post<TodoPostParams, Todo>('/todo', params);
  },

  updateTodo: (todoId: string, params: TodoPutParams) => {
    return ApiUtils.put<TodoPutParams, Todo>(`/todo/${todoId}`, params);
  },

  deleteTodo: (todoId: string): Promise<Todo> => {
    return ApiUtils.delete(`/todo/${todoId}`);
  },

  addTask: (todoId: string, params: TaskPostParams) => {
    return ApiUtils.post(`/todo/${todoId}/task`, params);
  },

  mutateTodos: () => {
    return mutate<TodoAndTask[]>('/todo');
  },
};

export default TodoApi;
