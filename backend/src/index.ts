import { PrismaClient } from '@prisma/client'
import express from 'express'
const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

app.listen(3000, () => {
    console.log("Start on port 3000.")
})

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

const prisma = new PrismaClient({})

//一覧取得
app.get('/users/static', (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
})


//一覧取得
app.get('/users/db', async(req: express.Request, res: express.Response) => {
    const users = await prisma.user.findMany()
    await prisma.$disconnect()
    res.send(JSON.stringify(users))
})

app.post('/users/db', async(req: express.Request, res: express.Response) => {
    const users = await prisma.user.create({
        data:{
            email: 'test1'
        }
    })
    await prisma.$disconnect()
    res.send(JSON.stringify(users))
})
