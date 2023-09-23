import Home from "./components/home";
import { Routes, Route, Navigate} from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import StaffPanel from "./components/StaffPanel";
import Orders from "./components/Orders";
import Users from "./components/Users";
import PropTypes from 'prop-types';

function App() {

  const PrivateRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    
    if (!authToken) {
      console.log("Redirigiendo a /login");
      return <Navigate to="/login" />;
    }
      return children;
  }

  PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

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

// const navigate = useNavigate();
// const admin = useSelector((state) => state.admin);

//   useEffect(() => {
//     console.log("Ejecutando useEffect en Home");
//     console.log("Estado admin:", admin);
  
//     if (!admin.admin) {
//       console.log("Redirigiendo a /login");
//       navigate("/login");
//     }
//   }, []);


  // useEffect(() => {
  //   console.log("Ejecutando useEffect en Home");
  //   console.log("Estado admin:", admin);
  //   const PrivateRoute = ({ element, path}) => {
  //     if (!admin.admin) {
  //       console.log("Redirigiendo a /login");
  //       navigate("/login");
  //     } else {
  //       return <Route path={path} element={element} />;
  //     }
  //   }
  // }, [PrivateRoute]);
