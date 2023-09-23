import Home from "./components/home";
import { Routes, Route, Navigate} from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import StaffPanel from "./components/StaffPanel";
import Orders from "./components/Orders";
import Users from "./components/Users";

function App() {
  const PrivateRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      return <Navigate to="/login" />;
    }
      return children;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/orders" element={
        <PrivateRoute>
          <Orders />
        </PrivateRoute>
        }/>
        <Route path="/users" element={
        <PrivateRoute>
          <Users />
        </PrivateRoute>
        } />
        <Route path="/staff-panel" element={
        <PrivateRoute>
          <StaffPanel />
        </PrivateRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;