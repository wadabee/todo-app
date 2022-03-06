import { Todo } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  Tags,
} from 'tsoa';
import {
  TaskPostParams,
  TodoAndTask,
  TodoPostParams,
  TodoPutParams,
  TaskPutParams,
} from '../@types/Todo';
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
  public getAllTodos(): Promise<TodoAndTask[]> {
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

  /**
   * ToDo更新
   * @summary ToDo更新
   * @param TodoPostParams
   * @returns 登録したToDo
   */
  @Put('{todoId}')
  public updateTodo(
    @Path() todoId: string,
    @Body() params: TodoPutParams
  ): Promise<Todo> {
    return this.todoService.updateTodo({
      id: todoId,
      ...params,
    });
  }

  /**
   * ToDo削除
   * @summary ToDo削除
   * @returns 削除したToDo
   */
  @Delete('{todoId}')
  public deleteTodo(@Path() todoId: string): Promise<Todo> {
    return this.todoService.deleteTodo(todoId);
  }

  /**
   * タスクの登録
   * @summary 指定のToDoにタスクを登録する
   * @param TaskPostParams
   * @returns 登録したタスク
   */
  @Post('{todoId}/task')
  public addTask(
    @Path() todoId: string,
    @Body() params: TaskPostParams
  ): Promise<Todo> {
    return this.todoService.addTask({
      todoId,
      ...params,
    });
  }

  /**
   * タスクの更新
   * @summary タスクを更新する
   * @param TaskPutParams
   * @returns 更新したタスク
   */
  @Post('/task/{taskId}')
  public updateTask(
    @Path() taskId: string,
    @Body() params: TaskPutParams
  ): Promise<Todo> {
    return this.todoService.updateTask({
      id: taskId,
      ...params,
    });
  }

  /**
   * タスクの削除
   * @summary タスクを削除する
   * @returns 更新したタスク
   */
  @Delete('/task/{taskId}')
  public deleteTask(@Path() taskId: string): Promise<Todo> {
    return this.todoService.deleteTask(taskId);
  }
}
