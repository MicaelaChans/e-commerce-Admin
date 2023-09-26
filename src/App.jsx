import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import StaffPanel from "./components/StaffPanel";
import Orders from "./components/Orders";
import Users from "./components/Users";
import Analytics from "./components/Analytics";
import Revenue from "./components/Revenue";
import Notifications from "./components/Notifications";
import Product from "./components/Product"

function App() {
  const PrivateRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <Notifications />
            </PrivateRoute>
          }
        />
        <Route
          path="/revenue"
          element={
            <PrivateRoute>
              <Revenue />
            </PrivateRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <Analytics />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Product/>
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/staff-panel"
          element={
            <PrivateRoute>
              <StaffPanel />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
