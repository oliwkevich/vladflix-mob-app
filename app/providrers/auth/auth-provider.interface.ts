import { Dispatch, SetStateAction } from 'react';

import { IUser } from '@/shared/types/user.interface';

export type TypeUserState = IUser | null;

export interface IAuthProvider {
	user: TypeUserState;
	setUser: Dispatch<SetStateAction<TypeUserState>>;
}
