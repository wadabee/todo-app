import { User } from '@prisma/client';
import { Controller, Get, Route } from 'tsoa';

@Route('users')
export class UsersController extends Controller {
  @Get('/')
  public getAllUsers() {
    return;
  }
}
