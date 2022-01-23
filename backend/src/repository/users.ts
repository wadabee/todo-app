import { prisma } from "./utils"

const UserRepo = {
  getAllUsers : () => {
    return prisma.user.findMany()
  },

  getUserById: (id:number) => {
    return prisma.user.findUnique({
      where: {
          id : id
      }
  })
  },

  createUser: (name: string) => {
    return prisma.user.create({
      data:{
          name: name
      }
  })
  }
}

export default UserRepo

