import { CreateTodoParams, Todo } from '../@types/Todo';
import todoRepo from '../repository/todo';

class TodoService {
  public getAllTodos(): Promise<Todo[]> {
    return todoRepo.getAllTodo();
  }

  public createTodo(params: CreateTodoParams): Promise<Todo> {
    return todoRepo.createTodo(params);
  }
}

export default TodoService;
