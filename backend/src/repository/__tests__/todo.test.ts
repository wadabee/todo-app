/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TODO_1, TODO_2 } from '../../../__tests__/data/todo';
import TodoRepo from '../todo';
import { prisma } from '../utils';

describe('UserRepo', () => {
  beforeAll(async () => {
    await prisma.todo.deleteMany();
    await prisma.todo.createMany({
      data: [TODO_1, TODO_2],
    });
  });

  const { getAllTodo, createTodo, updateTodo } = TodoRepo;

  describe('getAllTodo', () => {
    test('全ToDoが取得されること', async () => {
      const actual = await getAllTodo();
      expect(actual).toHaveLength(2);
      expect(actual[0]).toEqual(TODO_1);
      expect(actual[1]).toEqual(TODO_2);
    });
  });

  describe('createTodo', () => {
    test('ToDoが登録できること', async () => {
      const actual = await createTodo({
        title: 'new-todo',
        note: 'new-note',
      });
      expect(actual.id).toBeDefined();
      expect(actual.title).toBe('new-todo');
      expect(actual.note).toBe('new-note');
      expect(actual.completed).toBe(false);

      const finded = await prisma.todo.findUnique({
        where: {
          id: actual.id,
        },
      });
      expect(actual).toEqual(finded);
    });
  });

  describe('updateTodo', () => {
    const testId = 'test001';
    beforeAll(async () => {
      await prisma.todo.create({
        data: {
          id: testId,
          title: 'title',
          note: 'note',
        },
      });
    });

    test('TodoのTitleが更新される', async () => {
      const actual = await updateTodo({
        id: testId,
        title: 'title-updated',
      });
      const finded = await prisma.todo.findUnique({
        where: {
          id: testId,
        },
      });
      expect(actual).toEqual(finded);
    });

    test('Todoのnoteが更新される', async () => {
      const actual = await updateTodo({
        id: testId,
        note: 'note-updated',
      });
      const finded = await prisma.todo.findUnique({
        where: {
          id: testId,
        },
      });
      expect(actual).toEqual(finded);
    });
  });
});
