import { IRoute } from './navigation.types';

import Admin from '@/components/screens/admin/home/admin';

export const adminRoutes: IRoute[] = [
	{ name: 'Admin', component: Admin, isAdmin: true }
];
