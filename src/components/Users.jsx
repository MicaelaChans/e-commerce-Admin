import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
//import { ToastContainer, toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Users() {
  //const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  // const [show, setShow] = useState(false);
  // const [userData, setUserData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   address: "",
  //   phone: "",
  // });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:8000/users",
        });
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserData({ ...userData, [name]: value });
  // };

  // const handleSave = async () => {
  //   try {
  //     const userId = user.id;
  //     const url = `http://localhost:8000/users/${userId}`;
  //     const response = await axios.put(url, userData);
  //     console.log("Usuario actualizado:", response.data);
  //     handleClose();
  //   } catch (error) {
  //     console.error("Error al actualizar usuario:", error);
  //   }
  // };

  return (
    <div className="container ">
      <Sidebar />
      <section className="home">
        <div className="text">Users</div>
        <div className="container letters">
          <div className="container mt-3 text-center">
            <h2>Users</h2>
            <table className="table table-dark table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                      {/* <Button
                        className="w-25 btn btn-light ms-2"
                        onClick={handleShow}
                      >
                        Modifie
                      </Button>

                      <Modal
                        show={show}
                        onHide={handleClose}
                        animation={false}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="contained-modal-title-vcenter">
                            Modifie User
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="container">
                            <h6>
                              Firstname:
                              <input
                                className="ms-2 border-0 w-100 ps-2"
                                type="text"
                                placeholder={user.firstname}
                              />
                            </h6>
                            <h6>
                              Lastname:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2"
                                type="text"
                                placeholder={user.lastname}
                              />
                            </h6>
                            <h6>
                              Email:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2"
                                type="text"
                                placeholder={user.email}
                              />
                            </h6>
                            <h6>
                              Address:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2"
                                type="text"
                                placeholder={user.address}
                              />
                            </h6>
                            <h6>
                              Phone:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2"
                                type="text"
                                placeholder={user.phone}
                              />
                            </h6>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={handleClose}>Cancel</Button>
                          <Button onClick={handleChange}>Save</Button>
                        </Modal.Footer>
                      </Modal>
                      <button className="w-25 btn btn-light ms-2">
                        Orders
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Users;