import { Todo as prismaTodo, Task as prismaTask } from '@prisma/client';

export type Todo = prismaTodo;
export type Task = prismaTask;

export type TodoAndTask = Todo & {
  tasks: Task[];
};

export type CreateTodoParams = {
  title: string;
  note?: string;
};
export type UpdateTodoParams = {
  id: string;
  title?: string;
  note?: string;
  completed?: boolean;
};

export type AddTaskParams = {
  todoId: string;
  title: string;
  note?: string;
};

export type UpdateTaskParams = {
  id: string;
  title?: string;
  note?: string;
  completed?: boolean;
};

export type TodoPostParams = {
  title: string;
  note?: string;
};

export type TodoPutParams = Partial<TodoPostParams> & { completed?: boolean };

export type TaskPostParams = Omit<AddTaskParams, 'todoId'>;
export type TaskPutParams = Omit<UpdateTaskParams, 'id'>;
