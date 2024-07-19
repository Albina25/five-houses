import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useAuth } from '../../../shared/hooks/useAuth';
import { useActions } from '../../../shared/hooks/redux';
import { accountActions } from '../../../store/slices/AccountSlice';

const AdminRoutes = () => {
  const { isAuth } = useAuth();
  const { removeAccount } = useActions(accountActions);
  return isAuth ? (
    <>
      <div>
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/orders">Orders</Link>
        <button onClick={() => removeAccount()}>Exit</button>
      </div>
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Routes>
    </>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

export default AdminRoutes;
