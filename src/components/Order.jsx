import React from "react";

function Order() {
  return (
    <>
      <div className="container mt-3 ">
        <h2>Orders</h2>
        <div className="row mt-3 gap-3 d-flex">
          <div className="col-4" id="colAdd">
            <h4>
              Add <i class="bi bi-bag-plus-fill"></i>
            </h4>
          </div>
          <div className="col-4" id="colUpdate">
            <h4>
              Update <i class="bx bx-edit-alt bx-fade-right"></i>
            </h4>
          </div>
          <div className="col-4" id="colRemove">
            <h4>
              Remove <i class="bi bi-trash3"></i>
            </h4>
          </div>
        </div>

        <div className="row mt-3 gap-3 d-flex">
          <div className="col-3" id="colDelivered">
            <h4>
              Delivered <i class="bi bi-box2-heart"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
          <div className="col-3" id="colOnTheWay">
            <h4>
              On the way <i class="bx bx-run bx-fade-right"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
          <div className="col-3" id="colPeid">
            <h4>
              Peid <i class="bi bi-credit-card"></i>
            </h4>
            <ul>
              <li>1</li>
            </ul>
          </div>
          <div className="col-3" id="colNotPeid">
            <h4>
              Not Peid <i class="bi bi-cash-coin"></i>
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
