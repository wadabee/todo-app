import { User } from '@prisma/client';
import request from 'supertest';
import { USER_1, USER_2 } from '../../../__tests__/data/users';
import { toRequestBody } from '../../../__tests__/utils/assertHelper';
import app from '../../app';
import { prisma } from '../../repository/utils';
import { UserPostParams } from '../../@types/User';

describe('usersController', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany();
    await prisma.user.createMany({
      data: [USER_1, USER_2],
    });
  });

  describe('getAllUsers', () => {
    test('全ユーザを取得できること', async () => {
      const res = await request(app).get('/users');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(toRequestBody([USER_1, USER_2]));
    });
  });

  describe('getUser', () => {
    test('ID指定でユーザを取得できること', async () => {
      const res = await request(app).get(`/users/${USER_1.id}`);
      expect(res.status).toBe(200);
      expect(res.body).toEqual(toRequestBody(USER_1));
    });

    test('ユーザが存在しない場合は404', async () => {
      const res = await request(app).get(`/users/99999`);
      expect(res.status).toBe(404);
    });
  });

  describe('createUser', () => {
    test('ユーザが登録されること', async () => {
      const param: UserPostParams = {
        name: 'test999',
      };
      const res = await request(app).post('/users').send(param);
      const body: User = res.body as User;
      expect(res.status).toBe(200);
      expect(body.name).toBe(param.name);

      const dbData = await prisma.user.findUnique({
        where: {
          id: body.id,
        },
      });
      expect(toRequestBody(dbData)).toEqual(body);
    });
  });
});
