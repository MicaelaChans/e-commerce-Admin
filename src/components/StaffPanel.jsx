import { useEffect, useState } from "react";
import "../css/Home.css";
import Sidebar from "./SideBar";
import "../css/Sidebar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../css/CreateAdmin.css";
import { useSelector } from "react-redux";

function StaffPanel() {
  const authToken = useSelector((state) => state.admin.authToken);
  const [showPassword, setShowPassword] = useState(false);
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const [adminsList, setAdminList] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMsg, setWarningMsg] = useState("");

  const getAdmins = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `${apiUrl}/admins`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setAdminList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: `${apiUrl}/admins`,
      data: { firstname, lastname, username, email, password },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response.data === "existent email already") {
      setWarningMsg("There's an existing account with this email");
    } else if (response.data === "existent phone already") {
      setWarningMsg("There's an existing account with this phone");
    } else {
      toast.success("Admin creado exitosamente.");
    }
  };

  const handleDeleteAdmin = async (adminId, username) => {
    if (username === "admin") {
      toast.error("Este usuario no se puede eliminar");
      return;
    }
    if (username === authToken.username) {
      toast.error("No te puedes eliminar a vos mismo");
      return;
    }
    try {
      const response = await axios({
        method: "DELETE",
        url: `${apiUrl}/admins/${adminId}`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    getAdmins();
  });

  return (
    <>
      <div className="container ">
        <Sidebar />
        <section className="home">
          <div className="text">Staff Panel</div>
          <div className="container">
            <div className="createAdmin shadow p-4">
              <form method="POST" onSubmit={handleSubmit}>
                <h2>Register Staff member</h2>
                <div className="row">
                  <div className="col-6">
                    <div className="inputbox">
                      <input
                        type="text"
                        name="Firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                      <label>Firstname</label>
                    </div>
                    <div className="inputbox">
                      <input
                        type="text"
                        name="Lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                      <label>Lastname</label>
                    </div>
                    <div className="inputbox">
                      <input
                        type="text"
                        name="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="col-6">
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
                    <button
                      className="btn btn-light border rounded-5 w-50"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-danger text-center">{warningMsg}</p>
            </div>

            <div className="rounded shadow bg-dark createAdmin mt-4">
              <div className="mt-4">
                <h2>Staff List</h2>
                <table className="table table-dark table-hover mt-3 text-center ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Firstname</th>
                      <th scope="col">lastname</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {adminsList.map((admin, index) => (
                      <tr key={admin.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{admin.firstname}</td>
                        <td>{admin.lastname}</td>
                        <td>{admin.username}</td>
                        <td>{admin.email}</td>
                        <td>
                          {admin.username !== "admin" && (
                            <button
                              className="w-50"
                              onClick={() =>
                                handleDeleteAdmin(admin.id, admin.username)
                              }
                            >
                              Delete
                            </button>
                          )}
                          {admin.username === "admin" && (
                            <span>Default admin</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
}

export default StaffPanel;
