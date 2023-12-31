import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { formatDistanceToNow } from "date-fns";

function OrderModal({ showOrders, setShowOrders, UserID }) {
  const [userOrders, setUserOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const authToken = useSelector((state) => state.admin.authToken);
  const [productList, setProductList] = useState([]);
  const apiUrl = import.meta.env.VITE_APP_API_URL;
  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users/${UserID}/orders`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const getProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setProductList(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
    getUserOrders();
  }, [UserID, authToken]);

  const handleOrderDetails = async (orderId) => {
    try {
      const response = await axios.get(`${apiUrl}/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setSelectedOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((order, index) => (
                <tr key={order.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {formatDistanceToNow(new Date(order.updatedAt), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {order.products.map((productID, productIndex) => {
                      const product = productList.find(
                        (product) => product.id === productID
                      );
                      if (product) {
                        return <div key={productIndex}>{product.name}</div>;
                      } else {
                        return (
                          <div key={productIndex}>Producto no encontrado</div>
                        );
                      }
                    })}
                  </td>
                  <td>{userOrders[index].user.address}</td>
                  <td>{order.state}</td>
                  <td>
                    <button onClick={() => handleOrderDetails(order.id)}>
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal.Body>

      {selectedOrder && (
        <Modal
          show={!!selectedOrder}
          onHide={() => setSelectedOrder(null)}
          animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Order Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Due Date: {selectedOrder.dueDate}</h5>
            <h5>Address: {selectedOrder.user.address}</h5>
            <h5>Progress: {selectedOrder.progress}</h5>
            <h5>Products:</h5>
            <ul>
              {selectedOrder.products.map((product, productIndex) => (
                <li key={productIndex}>{product.name}</li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      )}
    </Modal>
  );
}

export default OrderModal;
