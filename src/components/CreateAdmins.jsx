import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../css/Home.css";
import Sidebar from "../components/SideBar";
import "../css/Sidebar.css";
import "../css/Charts.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAdmins() {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin);

  useEffect(() => {
    if (!admin) return navigate("/login");
  });

  return (
    <>
      {admin && (console.log(admin),
        <div className="container ">
          <Sidebar />
          <section className="home">
            <div className="text">Create admins</div>

            <div className="container letters border rounded">
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-12 col-form-label">Firstname</label>
                <div className="col-sm-12 border-bottom">
                  <input type="text" className="form-control-plaintext" id="staticEmail"/>
                </div>
              </div>
            <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-12 col-form-label">Lastname</label>
                <div className="col-sm-12 border-bottom">
                  <input type="text" className="form-control-plaintext" id="staticEmail" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-12 col-form-label">Email</label>
                <div className="col-sm-12 border-bottom">
                  <input type="text" className="form-control-plaintext" id="staticEmail" value="email@example.com" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputUsername" className="col-sm-12 col-form-label">Username</label>
                <div className="col-sm-12 border-bottom">
                  <input type="text" className="form-control-plaintext" id="Username" />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-12 col-form-label">Password</label>
                <div className="col-sm-12 border-bottom">
                  <input type="password" className="form-control-plaintext" id="inputPassword" />
                </div>
              </div>
              <button className="btn btn">Create</button>

              <ToastContainer position="top-right" />
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default CreateAdmins


