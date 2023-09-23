import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";

function OrderModal({ showOrders, setShowOrders, UserID }) {
  const [userOrders, setUserOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const authToken = localStorage.getItem("authToken");
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getUserOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/${UserID}/orders`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserOrders(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    const getProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setProductList(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
    getUserOrders();
  }, [UserID, authToken]);

  const handleOrderDetails = async (orderId) => {
    try {
      const response = await axios.get(`http://localhost:8000/orders/${orderId}`, {
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
                    <td>{order.updatedAt}</td>
                    <td>
                      {order.products.map((productID, productIndex) => {
                        const product = productList.find((product) => product.id === productID);
                        if (product) {
                          return <div key={productIndex}>{product.name}</div>;
                        } else {
                          return <div key={productIndex}>Producto no encontrado</div>;
                        }
                      })}
                    </td>
                    <td>{order.address}</td>
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

      {/* Aquí puedes mostrar los detalles de la orden en un modal adicional */}
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
            <h5>Address: {selectedOrder.address}</h5>
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
