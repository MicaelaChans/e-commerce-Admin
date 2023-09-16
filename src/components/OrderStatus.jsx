import React from "react";
import "../css/OrderStatus.css";

function OrderStatus() {
  return (
    <>
      <div className="containerTable mt-3 text-center">
        <h2>Orders</h2>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>May 15, 2023</td>
            <td>
              Entregado
              <div
                className="progress bgG"
                role="progressbar"
                aria-valuenow="25"
              ></div>
            </td>
          </tr>
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
