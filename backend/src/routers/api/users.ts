import { Router } from 'express';
import express from 'express';
import UserService from '../../services/users';

const usersRouter = Router();

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [
  { id: 1, name: 'User1', email: 'user1@test.local' },
  { id: 2, name: 'User2', email: 'user2@test.local' },
  { id: 3, name: 'User3', email: 'user3@test.local' },
];

usersRouter.get('/static', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(users));
});

//一覧取得
usersRouter.get('', async (req: express.Request, res: express.Response) => {
  const users = await UserService.getAllUsers();
  res.send(JSON.stringify(users));
});

type PathParams = {
  userId: string;
};
usersRouter.get(
  '/:userId',
  async (req: express.Request<PathParams>, res: express.Response) => {
    const users = await UserService.getUserById(
      Number.parseInt(req.params.userId)
    );
    res.send(JSON.stringify(users));
  }
);

type BodyType = {
  name: string;
};
usersRouter.post(
  '',
  async (req: express.Request<any, any, BodyType>, res: express.Response) => {
    const users = await UserService.createUser(req.body.name);
    res.send(JSON.stringify(users));
  }
);

export default usersRouter;
