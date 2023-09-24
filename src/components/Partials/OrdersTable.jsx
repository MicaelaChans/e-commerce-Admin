import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

function OrdersTable() {
  const authToken = localStorage.getItem("authToken");
  const [orderList, setOrderList] = useState([]);

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
    <div className="rounded shadow bg-dark">
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
              <td>{order.user.firstname}</td>
              <td>
                {formatDistanceToNow(new Date(order.updatedAt), {
                  addSuffix: true,
                })}
              </td>
              <td>
                {order.state}
                <div
                  className={`progress ${getClassNameState(order.state)}`}
                  role="progressbar"
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
