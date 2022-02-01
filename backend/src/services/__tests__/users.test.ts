/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserService from '../users';
import { DeepMockProxy } from 'jest-mock-extended';
import UserRepo from '../../repository/users';
import { User } from '@prisma/client';

jest.mock('../../repository/users', () => ({
  __esModule: true,
  default: {
    getAllUsers: jest.fn(),
    createUser: jest.fn(),
    getUserById: jest.fn(),
  } as typeof UserRepo,
}));

describe('UserService', () => {
  const service = new UserService();
  const userRepoMock = UserRepo as unknown as DeepMockProxy<typeof UserRepo>;

  describe('getAllUsers', () => {
    test('UserRepo.getAllUsersを実行していること', async () => {
      const TEST_DATA: User[] = {
        test: 'ユーザ全取得',
      } as any;

      userRepoMock.getAllUsers.mockResolvedValueOnce(TEST_DATA);
      await expect(service.getAllUsers()).resolves.toEqual(TEST_DATA);
    });
  });

  describe('getUserById', () => {
    test('UserRepo.getUserByIdを実行していること', async () => {
      const TEST_DATA: User = {
        test: 'ユーザ取得',
      } as any;
      const TEST_PARAM = 123;

      userRepoMock.getUserById.mockResolvedValueOnce(TEST_DATA);

      await expect(service.getUserById(TEST_PARAM)).resolves.toEqual(TEST_DATA);
      expect(userRepoMock.getUserById.mock.calls[0][0]).toBe(TEST_PARAM);
    });
  });

  describe('createUser', () => {
    test('UserRepo.createUserを実行していること', async () => {
      const TEST_DATA: User = {
        test: 'ユーザ登録',
      } as any;
      const TEST_PARAM = 'ユーザ名';

      userRepoMock.createUser.mockResolvedValueOnce(TEST_DATA);

      await expect(service.createUser(TEST_PARAM)).resolves.toEqual(TEST_DATA);
      expect(userRepoMock.createUser.mock.calls[0][0]).toBe(TEST_PARAM);
    });
  });
});
