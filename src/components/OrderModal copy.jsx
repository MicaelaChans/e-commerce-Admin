import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { formatDistanceToNow } from "date-fns";

function OrderModal({ showOrders, setShowOrders, UserID }) {
  const authToken = localStorage.getItem("authToken");

  const [userOrders, setUserOrders] = useState([]);
  const [order, setOrder] = useState([]);
  const [OrderID, setOrderID] = useState([]);

  useEffect(() => {
    const getUserOrders = async () => {
      try {
        if (UserID) {
          const response = await axios.get(
            `http://localhost:8000/users/${UserID}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );
          const userData = response.data;

          if (userData && userData.orders) {
            setUserOrders(userData.orders);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    const getOrder = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8000/orders/${OrderID}`,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setOrder(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserOrders();
    getOrder();
  }, [UserID, authToken]);

  return (
    <Modal
      show={showOrders}
      onHide={() => setShowOrders(false)}
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Orders
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Due Date</th>
                <th scope="col">Product</th>
                <th scope="col">Address</th>
                <th scope="col">Progress</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.orders &&
                userOrders.orders.map((order, index) => (
                  <tr key={order.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {formatDistanceToNow(new Date(order.updatedAt), {
                        addSuffix: true,
                      })}
                    </td>
                    <td>
                      {order.products.map((product, productIndex) => (
                        <div key={productIndex}>{product.name}</div>
                      ))}
                    </td>
                    <td>{order.address}</td>
                    <td>{order.state}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default OrderModal;
