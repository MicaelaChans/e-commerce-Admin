import React from "react";
import "../css/Orders.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Orders() {
  const [orderList, setOrderList] = useState([]);
  //const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

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

  function getClassNameState(state) {
    switch (state) {
      case "Delivered":
        return "bgG";
      case "Paid":
        return "bgP";
      case "On the way":
        return "bgY";
      default:
        return "bgR";
    }
  }

  return (
    <>
      {" "}
      <div className="container mt-4">
        <table className="table table-dark table-hover mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Firstname</th>
              <th scope="col">Due Date</th>
              <th scope="col">Progress</th>
              <th scope="col" className="d-flex justify-content-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, index) => (
              <tr key={order.id}>
                <th scope="row">{index + 1}</th>
                <td>{order.user.firstname}</td>
                <td>{order.updatedAt}</td>
                <td>
                  {order.state}
                  <div
                    className={`progress ${getClassNameState(order.state)}`}
                    role="progressbar"
                  ></div>
                </td>
                <td className="d-flex justify-content-center gap-3">
                  {/*<div>
                    <Button
                      variant="none"
                      id="colAdd"
                      onClick={() => setShowAdd(true)}
                    >
                      <h4>
                        <i className="bi bi-bag-plus-fill"></i>
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
                  </div>*/}
                  <div>
                    <i
                      className="bi bi-pen text-white iconUyR fs-3"
                      onClick={() => setShowUpdate(true)}
                    ></i>
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
                  <div>
                    <i
                      className="bi bi-trash3 text-white iconUyR fs-3"
                      onClick={() => setShowRemove(true)}
                    ></i>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Orders;
