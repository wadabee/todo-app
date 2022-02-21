import { User } from '@prisma/client';
import { Body, Controller, Get, Path, Post, Response, Route, Tags } from 'tsoa';
import UserService from '../services/users';
import { UserPostParams } from '../@types/User';
@Route('users')
@Tags('Users')
export class UsersController extends Controller {
  private userService = new UserService();

  /**
   * 全ユーザを取得す
   * @summary 全ユーザ取得
   * @returns ユーザ配列
   */
  @Get('')
  public getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  /**
   * UserIDを指定してユーザを取得
   * @summary ユーザ取得
   * @param userId ユーザID
   * @returns ユーザ
   */
  @Get('{userId}')
  @Response('404', 'データが取得できなかった')
  public getUser(@Path() userId: number): Promise<User> {
    return this.userService.getUserById(userId).then((user) => {
      if (user === null) {
        this.setStatus(404);
        return Promise.reject();
      }
      return Promise.resolve(user);
    });
  }

  /**
   * ユーザ登録
   * @summary ユーザ登録
   * @param UserPostParams
   * @returns 登録ユーザ
   */
  @Post('')
  public createUser(@Body() { name }: UserPostParams): Promise<User> {
    return this.userService.createUser(name);
  }
}
