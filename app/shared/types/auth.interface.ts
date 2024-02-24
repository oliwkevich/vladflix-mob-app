import { IUser } from './user.interface';

export type IAuthFormData = Pick<IUser, 'email' | 'password'>;
