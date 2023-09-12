import React from "react";

function Order() {
  return (
    <>
      <div className="container mt-3">
        <h2>Orders</h2>
        <div className="row mt-3 gap-3 justify-content-center">
          <div className="col-3" id="colAdd">
            <h4>
              Add <i className="bi bi-bag-plus-fill"></i>
            </h4>
          </div>
          <div className="col-3" id="colUpdate">
            <h4>
              Update <i className="bx bx-edit-alt bx-fade-right"></i>
            </h4>
          </div>
          <div className="col-3" id="colRemove">
            <h4>
              Remove <i className="bi bi-trash3"></i>
            </h4>
          </div>
        </div>

        <div className="row mt-3 gap-3 justify-content-center">
          <div className="col-2" id="colDelivered">
            <h4>
              Delivered <i className="bi bi-box2-heart"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
          <div className="col-2" id="colOnTheWay">
            <h4>
              On the way <i className="bx bx-run bx-fade-right"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
          <div className="col-2" id="colPeid">
            <h4>
              Peid <i className="bi bi-credit-card"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
          <div className="col-2" id="colNotPeid">
            <h4>
              Not Peid <i className="bi bi-cash-coin"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Order;
