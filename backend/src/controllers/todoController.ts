import { Todo } from '@prisma/client';
import { Body, Controller, Get, Post, Route, Tags } from 'tsoa';
import { TodoPostParams } from '../@types/Todo';
import TodoService from '../services/todo';
@Route('todo')
@Tags('Todo')
export class TodoController extends Controller {
  private todoService = new TodoService();

  /**
   * 全ToDoを取得する
   * @summary 全ToDo取得
   * @returns ToDo配列
   */
  @Get('')
  public getAllTodos(): Promise<Todo[]> {
    return this.todoService.getAllTodos();
  }

  /**
   * ToDo登録
   * @summary ToDo登録
   * @param TodoPostParams
   * @returns 登録したToDo
   */
  @Post('')
  public createTodo(@Body() params: TodoPostParams): Promise<Todo> {
    return this.todoService.createTodo(params);
  }
}