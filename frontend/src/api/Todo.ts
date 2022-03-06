import { Todo, TodoPostParams, TodoPutParams } from '@backend/@types/Todo';
import { AxiosError } from 'axios';
import { ApiResponse } from 'src/@types/ApiUtils';
import useSWR, { mutate } from 'swr';
import ApiUtils from './ApiUtils';

const TodoApi = {
  getAllTodos: (): ApiResponse<Todo[]> => {
    const { data, error } = useSWR<Todo[], AxiosError<Todo[]>>('/todo', ApiUtils.fetcher);
    return { data, error };
  },

  createTodo: (params: TodoPostParams) => {
    return ApiUtils.post<TodoPostParams, Todo>('/todo', params);
  },

  updateTodo: (todoId: string, params: TodoPutParams) => {
    return ApiUtils.put<TodoPutParams, Todo>(`/todo/${todoId}`, params);
  },

  mutateTodos: () => {
    return mutate<Todo[]>('/todo');
  },
};

export default TodoApi;
