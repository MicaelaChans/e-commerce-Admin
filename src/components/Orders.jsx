import React from "react";
import "../css/Orders.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/SideBar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { formatDistanceToNow } from "date-fns";
import { removeOrder } from "../redux/orderSlice";

function Orders() {
  const authToken = useSelector((state) => state.admin.authToken);

  const dispatch = useDispatch();
  const [orderList, setOrderList] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:8000/orders",
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setOrderList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [authToken]);

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
    orderList.length > 0 && (
      <>
        <div className="container ">
          <Sidebar />
          <section className="home">
            <div className="text">Orders - Dashboard</div>

            <div className="container">
              <table className="table table-dark table-hover mt-3 text-center">
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
                      <td>
                        {formatDistanceToNow(new Date(order.updatedAt), {
                          addSuffix: true,
                        })}
                      </td>
                      <td>
                        {order.state}
                        <div
                          className={`progress ${getClassNameState(
                            order.state
                          )}`}
                          role="progressbar"
                        ></div>
                      </td>
                      <td className="d-flex justify-content-center gap-3">
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
                            <Modal.Header closeButton>
                              <Modal.Title id="contained-modal-title-vcenter">
                                Update Order
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div className="container">
                                <h6>Products:</h6>
                                {order.products.map((product) => {
                                  <div key={product.id}>
                                    <p>{product.name}</p>
                                  </div>;
                                })}

                                {order.state}
                                <div
                                  className={`progress ${getClassNameState(
                                    order.state
                                  )}`}
                                  role="progressbar"
                                ></div>
                              </div>
                            </Modal.Body>
                            <Modal.Footer className=" d-flex ">
                              <div className="d-flex flex-row gap-3">
                                <div>
                                  <Button
                                    variant="text-black"
                                    className="btn btn-dark w-100"
                                    onClick={() => setShowUpdate(false)}
                                  >
                                    Cancel
                                  </Button>
                                </div>
                                <div>
                                  <Button
                                    variant="text-black"
                                    className="btn btn-dark w-100"
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
                            onClick={() => handleRemoveOrder}
                          ></i>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </>
    )
  );
}

export default Orders;
