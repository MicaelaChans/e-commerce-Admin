import "../css/Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await axios({
			url: "http://localhost:8000/tokens",
			method: "POST",
			data: { password, username },
		});
		console.log(response.data.token);
		if (response.data.token) {
			dispatch(login(response.data));
			navigate("/");
		}else {
			console.log("wrong Password")
			// <div className="modal-dialog modal-dialog-centered">
			// 	Wrong Password
			// </div>
		}
	}

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
							<div className="forget">

							</div>
							<button>Log in</button>
							<div className="register">
								<p>Forgot password? <a href="#">Contact an admin</a></p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login