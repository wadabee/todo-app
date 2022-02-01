import { User as prismaUser } from '@prisma/client';

export type User = prismaUser;

export type UserPostParams = {
  name: string;
};
