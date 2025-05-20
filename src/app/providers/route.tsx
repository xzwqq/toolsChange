import React from 'react';
import { RoutesConfig } from './type/routetype.ts';
const Home = React.lazy(() => import('../../pages/Home/index.ts'));
const ToolsSend = React.lazy(() => import('../../pages/ToolsSend/index.ts'));
const Login = React.lazy(() => import('../../pages/Login/index.ts'));
const MyProfile = React.lazy(() => import('../../pages/MyProfile/index.ts'));
const Edit = React.lazy(() => import('../../pages/Edit/index.ts'));
const Rating = React.lazy(() => import('../../pages/Rating/index.ts'));
const Advert = React.lazy(() => import('../../pages/Advert/index.ts'));
const Error = React.lazy(() => import('../../pages/Error/index.ts'));
const Registration = React.lazy(
	() => import('../../pages/Registration/index.ts')
);
const Notification = React.lazy(
	() => import('../../pages/Notification/index.ts')
);

export const routes: RoutesConfig = {
	home: {
		path: '/',
		element: <Home />
	},
	registration: {
		path: '/registration',
		element: <Registration />
	},
	login: {
		path: '/login',
		element: <Login />
	},
	my: {
		path: '/my',
		element: <MyProfile />
	},
	toolsend: {
		path: '/toolsend',
		element: <ToolsSend />
	},
	notification: {
		path: '/notification',
		element: <Notification />
	},
	advert: {
		path: '/advert/:id',
		element: <Advert />
	},
	edit: {
		path: '/edit/:id',
		element: <Edit />
	},
	rating: {
		path: '/rating/:id',
		element: <Rating />
	},
	error: {
		path: '*',
		element: <Error />
	}
};
