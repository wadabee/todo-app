import { Todo, TodoPostParams } from '@backend/@types/Todo';
import TodoApi from 'src/api/Todo';
import { mutate } from 'swr';

const useTodo = () => {
  const getAllTodos = () => {
    return TodoApi.getAllTodos();
  };

  const mutateTodos = (todo: Todo) => {
    return mutate<Todo[]>('/todo', [todo]);
  };

  const registerTodo = (params: TodoPostParams) => {
    return TodoApi.createTodo(params);
  };

  return {
    getAllTodos,
    mutateTodos,
    registerTodo,
  };
};

export default useTodo;
