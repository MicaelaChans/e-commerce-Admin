import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Home.css";
import Sidebar from "../components/SideBar";
import "../css/Sidebar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderStatus from "./OrderStatus";

function Orders() {
  const dispatch = useDispatch();
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
      <div className="container ">
        <Sidebar />
        <section className="home">
          <div className="text">Orders</div>
          <div className="container letters">
            <div className="container mt-3 text-center">
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
              <OrderStatus />
            </div>
            <ToastContainer position="top-right" />
          </div>
        </section>
      </div>
    </>
  );
}
export default Orders;
