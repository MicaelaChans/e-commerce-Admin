import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function OrderModal({ userList, userId, showOrders, setShowOrders }) {
  const dispatch = useDispatch();

  const currentUser = [...userList.filter((thisUser) => thisUser.id == userId)];

  if (currentUser.length > 0) {
    console.log(currentUser[0].orders);
  }
  console.log(currentUser);

  return (
    currentUser[0] && (
      <Modal
        show={showOrders}
        onHide={() => setShowOrders(false)}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter ">
            All your orders
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
                {currentUser[0].orders.map((order, index) => (
                  <tr key={order._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{order.updatedAt}</td>
                    <td>
                      {order.products.map((product, productIndex) => (
                        <div key={productIndex}>{product.name} </div>
                      ))}
                    </td>
                    <td>{order.address}</td>
                    <td>
                      {order.state}
                      <div
                        //className={`progress ${getClassNameState(order.state)}`}
                        role="progressbar"
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    )
  );
}

export default OrderModal;
