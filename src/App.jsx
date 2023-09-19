import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import CreateAdmins from "./components/CreateAdmins";
import Orders from "./components/Orders";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/create-admin" element={<CreateAdmins/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
