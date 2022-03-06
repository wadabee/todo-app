import { Todo as prismaTodo, Task as prismaTask } from '@prisma/client';

export type Todo = prismaTodo;
export type Task = prismaTask;

export type CreateTodoParams = {
  title: string;
  note?: string;
};
export type UpdateTodoParams = { id: string } & Partial<CreateTodoParams>;

export type TodoPostParams = {
  title: string;
  note?: string;
};

export type TodoPutParams = Partial<TodoPostParams>;
