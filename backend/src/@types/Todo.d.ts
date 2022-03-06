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
export type UpdateTodoParams = { id: string } & Partial<CreateTodoParams>;

export type AddTaskParams = {
  todoId: string;
  title: string;
  note?: string;
};

export type TodoPostParams = {
  title: string;
  note?: string;
};

export type TodoPutParams = Partial<TodoPostParams>;

export type TaskPostParams = Omit<AddTaskParams, 'todoId'>;
