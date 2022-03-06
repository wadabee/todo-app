import {
  AddTaskParams,
  CreateTodoParams,
  UpdateTodoParams,
} from '../@types/Todo';
import { prisma } from './utils';

const TodoRepo = {
  getAllTodo: () => {
    return prisma.todo.findMany({
      include: {
        tasks: true,
      },
      orderBy: [
        {
          id: 'asc',
        },
      ],
    });
  },

  createTodo: ({ title, note }: CreateTodoParams) => {
    return prisma.todo.create({
      data: {
        title: title,
        note: note,
      },
    });
  },

  updateTodo: ({ id, title, note }: UpdateTodoParams) => {
    return prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        note,
      },
    });
  },

  deleteTodo: (todoId: string) => {
    return prisma.todo.delete({
      where: {
        id: todoId,
      },
    });
  },

  addTask: ({ todoId, title, note }: AddTaskParams) => {
    return prisma.task.create({
      data: {
        todoId,
        title,
        note,
      },
    });
  },
};

export default TodoRepo;
