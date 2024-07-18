import React from "react";
import "./App.css";
import AdminApp from "../modules/admin/AdminApp";
import UserApp from "../modules/user/UserApp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/*" element={<UserApp />} />
    </Routes>
  );
}

export default App;
