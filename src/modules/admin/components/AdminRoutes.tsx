import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

const AdminRoutes = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="dashboard" />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
};

//AdminRoutes.propTypes = {};

export default AdminRoutes;
