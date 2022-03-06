import { CreateTodoParams, Todo, UpdateTodoParams } from '../@types/Todo';
import todoRepo from '../repository/todo';

class TodoService {
  public getAllTodos(): Promise<Todo[]> {
    return todoRepo.getAllTodo();
  }

  public createTodo(params: CreateTodoParams): Promise<Todo> {
    return todoRepo.createTodo(params);
  }

  public updateTodo(params: UpdateTodoParams): Promise<Todo> {
    return todoRepo.updateTodo(params);
  }
}

export default TodoService;
