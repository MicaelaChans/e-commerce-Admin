import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Home.css";
import Sidebar from "../components/SideBar";
import "../css/Sidebar.css";
import OrderStatus from "./OrderStatus";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addOrder, removeOrder } from "../redux/OrderSlice";

function Orders() {
  const dispatch = useDispatch();
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:8000/orders",
        });
        setOrderList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [orderList]);

  const handleAddOrder = (e) => {
    e.preventDefault();
    dispatch(addOrder({ id: id }));
  };

  const handleRemoveOrder = (orderId) => {
    dispatch(removeOrder(orderId));
  };

  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  return (
    <>
      <div className="container ">
        <Sidebar />
        <section className="home">
          <div className="text">Orders</div>
          <div className="container letters">
            <div className="container mt-3 text-center">
              <h2>Orders</h2>
              <div className="row mt-3 gap-3 justify-content-center">
                <div className="col-3" id="colAdd">
                  <Button variant="none" onClick={() => setShowAdd(true)}>
                    <h4>
                      Add <i className="bi bi-bag-plus-fill"></i>
                    </h4>
                  </Button>

                  <Modal
                    show={showAdd}
                    onHide={() => setShowAdd(false)}
                    animation={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header className="bg-dark text-white" closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Add Order
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-white">
                      <div className="container">
                        <form action="">
                          <label htmlFor="">Email</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="email@gmail.com"
                            className="bg-dark border-0 ms-2"
                          />
                          <label className="ms-3" htmlFor="">
                            Product
                          </label>
                          <input
                            type="product"
                            name="product"
                            placeholder="harmony-c43"
                            className="bg-dark border-0 ms-2"
                          />
                        </form>
                      </div>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark d-flex ">
                      <div className="d-flex flex-row gap-3">
                        <div>
                          <Button
                            variant="light text-black"
                            className="btn btn-outline-light w-100"
                            onClick={() => setShowAdd(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light text-black"
                            className="btn btn-outline-light w-100"
                            onClick={() => handleAddOrder}
                          >
                            Create
                          </Button>
                        </div>
                      </div>
                    </Modal.Footer>
                  </Modal>
                </div>

                <div className="col-3" id="colUpdate">
                  <Button variant="none" onClick={() => setShowUpdate(true)}>
                    <h4>
                      Update <i className="bx bx-edit-alt bx-fade-right"></i>
                    </h4>
                  </Button>

                  <Modal
                    show={showUpdate}
                    onHide={() => setShowUpdate(false)}
                    animation={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header className="bg-dark text-white" closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Update Order
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-white">
                      <div className="container"></div>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark d-flex ">
                      <div className="d-flex flex-row gap-3">
                        <div>
                          <Button
                            variant="light text-black"
                            className="btn btn-outline-light w-100"
                            onClick={() => setShowUpdate(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light text-black"
                            className="btn btn-outline-light w-100"
                            onClick={() => setShowUpdate(false)}
                          >
                            save
                          </Button>
                        </div>
                      </div>
                    </Modal.Footer>
                  </Modal>
                </div>

                <div className="col-3" id="colRemove">
                  <Button variant="none" onClick={() => setShowRemove(true)}>
                    <h4>
                      Remove <i className="bi bi-trash3"></i>
                    </h4>
                  </Button>

                  <Modal
                    show={showRemove}
                    onHide={() => setShowRemove(false)}
                    animation={false}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header className="bg-dark text-white" closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        Remove Order
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="bg-dark text-white">
                      <div className="container">
                        <table className="table table-dark table-hover mt-3">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Firstname</th>
                              <th scope="col">Due Date</th>
                              <th scope="col">Progress</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orderList.map((order, index) => (
                              <tr key={order.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    checked={false}
                                  />
                                  {order.user.firstname}
                                </td>
                                <td>{order.updatedAt}</td>
                                <td>
                                  {order.state}
                                  <div role="progressbar"></div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Modal.Body>
                    <Modal.Footer className="bg-dark d-flex ">
                      <div className="d-flex flex-row gap-3">
                        <div>
                          <Button
                            variant="light text-black"
                            className="btn btn-outline-light w-100"
                            onClick={() => setShowRemove(false)}
                          >
                            Cancel
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="light text-black"
                            className="btn btn-outline-light w-100"
                            onClick={() => handleRemoveOrder}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <OrderStatus />
            </div>
            <ToastContainer position="top-right" />
          </div>
        </section>
      </div>
    </>
  );
}
export default Orders;
