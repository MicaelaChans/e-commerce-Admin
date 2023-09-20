import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import { ToastContainer, toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Users() {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
  });

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const userId = user.id;
      const url = `http://localhost:8000/users/${userId}`;
      const response = await axios.put(url, userData);
      console.log("Usuario actualizado:", response.data);
      handleClose();
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
    }
  };

  const [showModifie, setShowModifie] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

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
                  <th scope="col">lastname</th>
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
                      <Button
                        className="w-25 btn btn-light ms-2"
                        onClick={() => setShowModifie(true)}
                      >
                        Modifie
                      </Button>

                      <Modal
                        show={showModifie}
                        onHide={() => setShowModifie(false)}
                        animation={false}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header
                          className="bg-dark text-white"
                          closeButton
                        >
                          <Modal.Title id="contained-modal-title-vcenter">
                            Modifie User
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-dark text-white">
                          <div className="container">
                            <h6>
                              Firstname:
                              <input
                                className="ms-2 border-0 w-100 ps-2 bg-dark"
                                type="text"
                                placeholder={user.firstname}
                              />
                            </h6>
                            <h6>
                              Lastname:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2 bg-dark"
                                type="text"
                                placeholder={user.lastname}
                              />
                            </h6>
                            <h6>
                              Email:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2 bg-dark"
                                type="text"
                                placeholder={user.email}
                              />
                            </h6>
                            <h6>
                              Address:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2 bg-dark"
                                type="text"
                                placeholder={user.address}
                              />
                            </h6>
                            <h6>
                              Phone:{" "}
                              <input
                                className="ms-2 border-0 w-100 ps-2 bg-dark"
                                type="text"
                                placeholder={user.phone}
                              />
                            </h6>
                          </div>
                        </Modal.Body>
                        <Modal.Footer className="bg-dark d-flex ">
                          <div className="d-flex flex-row gap-3">
                            <div>
                              <Button
                                variant="light text-black"
                                className="btn btn-outline-light w-100"
                                onClick={() => setShowModifie(false)}
                              >
                                Cancel
                              </Button>
                            </div>
                            <div>
                              <Button
                                variant="light text-black"
                                className="btn btn-outline-light w-100"
                                onClick={() => setShowModifie(false)}
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                        </Modal.Footer>
                      </Modal>

                      <Button
                        className="w-25 btn btn-light ms-2"
                        onClick={() => setShowOrders(true)}
                      >
                        Orders
                      </Button>

                      <Modal
                        show={showOrders}
                        onHide={() => setShowOrders(false)}
                        animation={false}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Header
                          className="bg-dark text-white"
                          closeButton
                        >
                          <Modal.Title id="contained-modal-title-vcenter">
                            Orders User
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="bg-dark text-white">
                          <div className="container">
                            <table className="table table-dark table-hover mt-3">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Due Date</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Progress</th>
                                </tr>
                              </thead>
                              <tbody>
                                {user.orders.map((order, index) => (
                                  <tr key={order.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{order.updatedAt}</td>
                                    <td>
                                      {order.products.map((product) => <p key={product.id}>{product.name}</p>)}
                                    </td>
                                    <td>{order.state}</td>
                                    <td>
                                      <div role="progressbar"></div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </Modal.Body>
                      </Modal>
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
