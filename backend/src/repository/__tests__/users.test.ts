/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import UserRepo from '../users';

describe('UserRepo', () => {
  const { getAllUsers } = UserRepo;
  describe('getAllUsers', () => {
    test('全ユーザが取得されること', async () => {
      await expect(getAllUsers()).resolves.toEqual([]);
    });
  });
});
