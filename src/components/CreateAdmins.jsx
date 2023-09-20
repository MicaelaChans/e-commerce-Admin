import { useEffect, useState } from "react";
import "../css/Home.css";
import Sidebar from "../components/SideBar";
import "../css/Sidebar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "../css/CreateAdmin.css"

function CreateAdmins() {
  const [adminsList, setAdminList] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMsg, setWarningMsg] = useState("");

  const getAdmins = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8000/admins",
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
      url: `http://localhost:8000/admins`,
      data: { firstname, lastname, username, email, password },
    });
    console.log(response.data);

    if (response.data === "existent email already") {
      setWarningMsg("There's an existing account with this email");
    } else if (response.data === "existent phone already") {
      setWarningMsg("There's an existing account with this phone");
    } else {
      toast.success("Admin creado exitosamente.");
    }
  };

  const handleDeleteAdmin = async (adminId, username) => {
    if (username === 'admin') {
      toast.error("Este usuario no se puede eliminar");
      console.error('No se puede eliminar al usuario "admin".');
      return;
    }
    try {
      const response = await axios.delete(`http://localhost:8000/admins/${adminId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdmins();
  });

  return (
    <>
      <div className="container ">
        <Sidebar />
        <section className="home">
          <div className="text">Create admins</div>
          <div className="container">

            <div className="CreateAdmin shadow p-4">
              <form method="POST" onSubmit={handleSubmit}>
                <h2>Register admin</h2>
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
                      <label htmlFor="">Password</label>
                    </div>
                  </div>
                  <button className="btn btn-light border rounded-5" type="submit">Create</button>
                </div>
              </form>
              <p className="text-danger text-center">{warningMsg}</p>
            </div>

            <div className="mt-5">
              <h2>Users</h2>
              <table className="table table-dark table-hover mt-3">
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
                      <td><button onClick={() => handleDeleteAdmin(admin.id, admin.username)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer position="top-right" />
    </>
  )
}

export default CreateAdmins


