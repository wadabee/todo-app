import { TaskPostParams, Todo, TodoPostParams, TodoPutParams } from '@backend/@types/Todo';
import TodoApi from 'src/api/Todo';
import { mutate } from 'swr';

const useTodo = () => {
  const getAllTodos = () => {
    return TodoApi.getAllTodos();
  };

  const mutateTodos = () => {
    return TodoApi.mutateTodos();
  };

  const registerTodo = (params: TodoPostParams) => {
    return TodoApi.createTodo(params);
  };

  const updateTodo = (todoId: string, params: TodoPutParams) => {
    return TodoApi.updateTodo(todoId, params);
  };

  const deleteTodo = (todoId: string) => {
    return TodoApi.deleteTodo(todoId);
  };

  const addTask = (todoId: string, params: TaskPostParams) => {
    return TodoApi.addTask(todoId, params);
  };

  return {
    getAllTodos,
    mutateTodos,
    registerTodo,
    updateTodo,
    deleteTodo,
    addTask,
  };
};

export default useTodo;
