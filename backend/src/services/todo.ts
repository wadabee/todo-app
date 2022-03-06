import {
  AddTaskParams,
  CreateTodoParams,
  Task,
  Todo,
  TodoAndTask,
  UpdateTaskParams,
  UpdateTodoParams,
} from '../@types/Todo';
import todoRepo from '../repository/todo';

class TodoService {
  public getAllTodos(): Promise<TodoAndTask[]> {
    return todoRepo.getAllTodo();
  }

  public createTodo(params: CreateTodoParams): Promise<Todo> {
    return todoRepo.createTodo(params);
  }

  public updateTodo(params: UpdateTodoParams): Promise<Todo> {
    return todoRepo.updateTodo(params);
  }

  public deleteTodo(todoId: string): Promise<Todo> {
    return todoRepo.deleteTodo(todoId);
  }

  public addTask(params: AddTaskParams): Promise<Task> {
    return todoRepo.addTask(params);
  }

  public updateTask(params: UpdateTaskParams): Promise<Task> {
    return todoRepo.updateTask(params);
  }

  public deleteTask(taskId: string): Promise<Task> {
    return todoRepo.deleteTask(taskId);
  }
}

export default TodoService;
