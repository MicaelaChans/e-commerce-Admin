import React from "react";

function OrderStatus() {
  return (
    <>
      <div className="container mt-3 text-center">
        <h2>Orders</h2>
      </div>
      <table className="table mt-3 hop">
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
                className="progress"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar"></div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Jul 01, 2023</td>
            <td>
              En Camino{" "}
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar"></div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry </td>
            <td>Abr 12, 2023</td>
            <td>
              Pagado{" "}
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar"></div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hernan </td>
            <td>Jun 06, 2023</td>
            <td>
              Sin pagar{" "}
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar"></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default OrderStatus;
