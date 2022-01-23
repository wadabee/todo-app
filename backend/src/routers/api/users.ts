import {Router} from 'express'
import express from 'express'
import { PrismaClient } from '@prisma/client';

const usersRouter = Router()

type User = {
  id: number
  name: string
  email: string
};

const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" }
]

usersRouter.get('/static', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(users))
})

const prisma = new PrismaClient({})

//一覧取得
usersRouter.get('', async(req: express.Request, res: express.Response) => {
    const users = await prisma.user.findMany()
    await prisma.$disconnect()
    res.send(JSON.stringify(users))
})

type PathParams = {
    userId: string;
}
usersRouter.get('/:userId', async(req: express.Request<PathParams>, res: express.Response) => {
    const users = await prisma.user.findFirst({
        where: {
            id : Number.parseInt(req.params.userId)
        }
    })
    await prisma.$disconnect()
    res.send(JSON.stringify(users))
})

type BodyType = {
    name: string;
}
usersRouter.post('', async(req: express.Request<any,any,BodyType>, res: express.Response) => {
    const users = await prisma.user.create({
        data:{
            name: req.body.name
        }
    })
    await prisma.$disconnect()
    res.send(JSON.stringify(users))
})


export default usersRouter