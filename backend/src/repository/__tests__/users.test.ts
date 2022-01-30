/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserRepo from '../users';
import { prisma } from '../utils';

describe('UserRepo', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: [
        {
          id: 1,
          name: 'test1',
          createdAt: new Date('2022-01-30'),
        },
        {
          id: 2,
          name: 'test2',
          createdAt: new Date('2022-01-30'),
        },
      ],
    });
  });

  const { getAllUsers } = UserRepo;
  describe('getAllUsers', () => {
    test('全ユーザが取得されること', async () => {
      const actual = await getAllUsers();
      expect(actual).toHaveLength(2);
      expect(actual[0]).toEqual({
        id: 1,
        name: 'test1',
        createdAt: new Date('2022-01-30'),
      });
      expect(actual[1]).toEqual({
        id: 2,
        name: 'test2',
        createdAt: new Date('2022-01-30'),
      });
    });
  });
});
