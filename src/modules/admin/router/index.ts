import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import OrderPage from "../pages/orders/OrdersPage";

export const privateRoutes = [
  { path: "/dashboard", element: DashboardPage, end: true },
  { path: "/orders", element: OrderPage, end: true },
];

export const publicRoutes = [{ path: "/login", element: LoginPage, end: true }];
