import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import OrderPage from "../pages/orders/OrdersPage";
import RegisterPage from "../pages/register/RegisterPage";

export const privateRoutes = [
  { path: "/dashboard", element: DashboardPage, end: true },
  { path: "/orders", element: OrderPage, end: true },
];

export const publicRoutes = [
  { path: "/login", element: LoginPage, end: true },
  { path: "/register", element: RegisterPage, end: true },
];
