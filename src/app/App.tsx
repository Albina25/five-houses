import "./App.css";
import AdminApp from "../admin/AdminApp";
import UserApp from "../user/UserApp";
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
