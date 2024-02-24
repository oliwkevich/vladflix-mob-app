import { IRoute } from './navigation.types';

import Auth from '@/components/screens/auth/auth';
import Home from '@/components/screens/home/home';

export const userRoutes: IRoute[] = [
	// {
	// 	name: 'Home',
	// 	component: Home
	// },
	{
		name: 'Auth',
		component: Auth
	}
];
