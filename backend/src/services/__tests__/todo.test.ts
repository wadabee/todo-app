/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TodoService from '../todo';
import { DeepMockProxy } from 'jest-mock-extended';
import TodoRepo from '../../repository/todo';
import { CreateTodoParams, Todo, UpdateTodoParams } from '../../@types/Todo';

jest.mock('../../repository/todo', () => ({
  __esModule: true,
  default: {
    createTodo: jest.fn(),
    getAllTodo: jest.fn(),
    updateTodo: jest.fn(),
  } as typeof TodoRepo,
}));

describe('ToDoService', () => {
  const service = new TodoService();
  const todoRepoMock = TodoRepo as unknown as DeepMockProxy<typeof TodoRepo>;

  describe('getAllTodo', () => {
    test('TodoRepo.getAllTodoを実行していること', async () => {
      const TEST_DATA: Todo[] = {
        test: 'Todo全取得',
      } as any;

      todoRepoMock.getAllTodo.mockResolvedValueOnce(TEST_DATA);
      await expect(service.getAllTodos()).resolves.toEqual(TEST_DATA);
    });
  });

  describe('createTodo', () => {
    test('TodoRepo.createTodoを実行していること', async () => {
      const TEST_DATA: Todo = {
        test: 'Todo登録',
      } as any;
      const TEST_PARAM: CreateTodoParams = {
        title: 'タスク名',
        note: '内容',
      };

      todoRepoMock.createTodo.mockResolvedValueOnce(TEST_DATA);

      await expect(service.createTodo(TEST_PARAM)).resolves.toEqual(TEST_DATA);
      expect(todoRepoMock.createTodo.mock.calls[0][0]).toBe(TEST_PARAM);
    });
  });

  describe('updateTodo', () => {
    test('TodoRepo.updateTodoを実行していること', async () => {
      const TEST_DATA: Todo = {
        test: 'Todo更新',
      } as any;
      const TEST_PARAM: UpdateTodoParams = {
        id: 'id001',
        title: 'タスク名',
        note: '内容',
      };

      todoRepoMock.updateTodo.mockResolvedValueOnce(TEST_DATA);

      await expect(service.updateTodo(TEST_PARAM)).resolves.toEqual(TEST_DATA);
      expect(todoRepoMock.updateTodo.mock.calls[0][0]).toBe(TEST_PARAM);
    });
  });
});
