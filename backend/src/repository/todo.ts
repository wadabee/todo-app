import { CreateTodoParams } from '../@types/Todo';
import { prisma } from './utils';

const TodoRepo = {
  getAllTodo: () => {
    return prisma.todo.findMany({
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
};

export default TodoRepo;
