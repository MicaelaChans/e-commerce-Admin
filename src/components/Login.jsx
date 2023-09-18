import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jwt from "jwt-decode";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

  return (
    <>
      <div className="container_login">
        <div className="form-box">
          <div className="form-value">
            <form method="POST" onSubmit={handleSubmit}>
              <h2>Login</h2>
              <div className="register">
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
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="">Password</label>
              </div>
              <div className="forget"></div>
              <button>Log in</button>
              <div className="register">
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