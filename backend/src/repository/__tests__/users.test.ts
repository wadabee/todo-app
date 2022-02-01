/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { USER_1, USER_2 } from '../../../__tests__/data/users';
import UserRepo from '../users';
import { prisma } from '../utils';

describe('UserRepo', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: [USER_1, USER_2],
    });
  });

  const { getAllUsers, getUserById, createUser } = UserRepo;
  describe('getAllUsers', () => {
    test('全ユーザが取得されること', async () => {
      const actual = await getAllUsers();
      expect(actual).toHaveLength(2);
      expect(actual[0]).toEqual(USER_1);
      expect(actual[1]).toEqual(USER_2);
    });
  });

  describe('getUserById', () => {
    test('id指定でユーザが取得できること', async () => {
      const actual = await getUserById(USER_1.id);
      expect(actual).toEqual(USER_1);
    });
  });

  describe('createUser', () => {
    test('ユーザが登録できること', async () => {
      const actual = await createUser('test3');
      expect(actual.id).toBeDefined();
      expect(actual.createdAt).toBeDefined();
      expect(actual.name).toBe('test3');

      const finded = await prisma.user.findUnique({
        where: {
          id: actual.id,
        },
      });
      expect(actual).toEqual(finded);
    });
  });
});
