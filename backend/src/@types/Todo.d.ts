export type Todo = {
  id: string;
  title: string;
  note: string | null;
  completed: boolean;
};
export type Task = {
  id: string;
  todoId: string;
  title: string;
  note: string | null;
  completed: boolean;
};

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
