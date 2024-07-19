import DashboardPage from '../pages/dashboard/DashboardPage';
import LoginPage from '../pages/login/LoginPage';
import OrderPage from '../pages/orders/OrdersPage';
import RegisterPage from '../pages/register/RegisterPage';
import {
  LOGIN_ROUTE,
  DASHBOARD_ROUTE,
  ORDERS_ROUTE,
} from '@/shared/utils/constants';

export const privateRoutes = [
  { path: DASHBOARD_ROUTE, element: DashboardPage, end: true },
  { path: ORDERS_ROUTE, element: OrderPage, end: true },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, element: LoginPage, end: true },
  { path: '/register', element: RegisterPage, end: true },
];
