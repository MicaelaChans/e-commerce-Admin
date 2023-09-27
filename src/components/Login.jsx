import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/adminSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt from "jwt-decode";
import { useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        url: "http://localhost:8000/tokens/admin",
        method: "POST",
        data: { username, password },
      });

      if (response.data.token) {
        const id = jwt(response.data.token).sub;
        const username = jwt(response.data.token).username;
        dispatch(
          login({
            token: response.data.token,
            id,
            username,
          })
        );
        localStorage.setItem("showSuccessToast", "true");
        navigate("/");
      } else {
        toast.error(
          response.data.error || "Error logging in. Please try again."
        );
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Error logging in. Please try again.");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setUsername("admin");
    setPassword("admin");
  }, []);

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="container_login">
        <div className="form-box">
          <div className="form-value">
            <form method="POST" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="Subtext">
                <p>Drachen Admin-Panel</p>
              </div>
              <div className="inputbox">
                <input
                  type="text"
                  name="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label>Username</label>
              </div>
              <div className="inputbox">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
                {password && (
                  <i
                    onClick={toggleShowPassword}
                    className={`toggle-password-button bx ${
                      showPassword ? "bxs-low-vision" : "bx-low-vision"
                    }`}
                  ></i>
                )}
              </div>
              <button>Log in</button>
              <div className="Subtext">
                <p>
                  Forgot password? <a href="#">Contact an admin</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
