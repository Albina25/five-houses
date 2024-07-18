import React from "react";
import { Link } from "react-router-dom";
import AdminRoutes from "./components/AdminRoutes";

const AdminApp: React.FC = () => {
  console.log("AdminApp rendered");
  return (
    <>
      <div>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>
      <AdminRoutes />
    </>
  );
};

export default AdminApp;
