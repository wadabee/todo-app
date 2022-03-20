import {
  AddTaskParams,
  CreateTodoParams,
  UpdateTaskParams,
  UpdateTodoParams,
} from '../@types/Todo';
import { prisma } from './utils';

const TodoRepo = {
  getAllTodo: () => {
    return prisma.todo.findMany({
      include: {
        tasks: {
          orderBy: [
            {
              completed: 'asc',
            },
            {
              id: 'asc',
            },
          ],
        },
      },
      orderBy: [
        {
          completed: 'asc',
        },
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

  updateTodo: ({ id, title, note, completed }: UpdateTodoParams) => {
    return prisma.todo.update({
      where: {
        id,
      },
      data: {
        title,
        note,
        completed,
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

  updateTask: ({ id, title, note, completed }: UpdateTaskParams) => {
    return prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        note,
        completed,
      },
    });
  },

  deleteTask: (id: string) => {
    return prisma.task.delete({
      where: {
        id,
      },
    });
  },
};

export default TodoRepo;
