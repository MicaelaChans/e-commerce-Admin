import React from "react";
import "../css/OrderStatus.css";
import { useState, useEffect } from "react";
import axios from "axios";

function OrderStatus() {
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

  return (
    <>
      <div className="containerTable mt-3 text-center">
        <h2>Orders Status</h2>
      </div>
      <table className="table table-dark table-hover mt-3 hop">
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
              <td>{order.user.firstname}</td>
              <td>{order.updatedAt}</td>
              <td>
                {order.state}
                <div
                  className="progress bgG"
                  role="progressbar"
                  aria-valuenow="25"
                ></div>
              </td>
            </tr>
          ))}
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Jul 01, 2023</td>
            <td>
              En Camino
              <div
                className="progress bgY"
                role="progressbar"
                aria-valuenow="25"
              ></div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry </td>
            <td>Abr 12, 2023</td>
            <td>
              Pagado
              <div
                className="progress bgP"
                role="progressbar"
                aria-valuenow="25"
              ></div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hernan </td>
            <td>Jun 06, 2023</td>
            <td>
              Sin pagar{" "}
              <div
                className="progress bgR"
                role="progressbar"
                aria-valuenow="25"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default OrderStatus;
