import {
	createRoute,
	createRootRoute,
	createRouter
} from '@tanstack/react-router';
import Header from '../../shared/ui/Header';
import HomePage from '../../pages/Home/HomePage';
import Auth from '../../pages/Auth/Auth';

const rootRoute = createRootRoute({
	component: Header
});

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/',
	component: HomePage
});
const authRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: '/auth',
	component: Auth
});

const routeTree = rootRoute.addChildren([indexRoute, authRoute]);
export const router = createRouter({ routeTree });
