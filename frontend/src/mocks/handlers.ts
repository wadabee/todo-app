// src/mocks/handlers.js
import { User, UserPostParams } from '@backend/@types/User';
import { rest } from 'msw';

const users: User[] = [
  {
    id: 1,
    name: 'モック1',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'モック2',
    createdAt: new Date(),
  },
];

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users));
  }),
  rest.post('/users', (req, res, ctx) => {
    const createdUser: User = {
      id: 3,
      name: (req.body as UserPostParams).name,
      createdAt: new Date(),
    };
    return res(ctx.status(200), ctx.json(createdUser));
  }),
  rest.get('/users/:userId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(users[0]));
  }),
];
