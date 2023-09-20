import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import StaffPanel from "./components/StaffPanel";
import Orders from "./components/Orders";
import Users from "./components/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/staff-panel" element={<StaffPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
