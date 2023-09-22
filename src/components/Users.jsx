import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/SideBar";
import { ToastContainer, toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OrderModal from "./OrderModal";
import ModifyModal from "./ModifyModal";

function Users() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const [userList, setUserList] = useState([]);
  const [userId, setUserId] = useState("");
  const [showModify, setShowModify] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://localhost:8000/users",
          headers: {
            Authorization: "Bearer " + (admin.admin && admin.admin.token),
          },
        });
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [admin]);

  const handleUserOne = (userId) => {
    setUserId(userId);
    setShowOrders(true);
  };

  return (
    <div className="container ">
      <Sidebar />
      <section className="home">
        <div className="text">Users</div>
        <div className="container letters">
          <div className="container mt-3 text-center">
            <table className="table table-dark table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                      <Button
                        className="w-25 btn btn-light ms-2"
                        onClick={() => setShowModify(true)}
                      >
                        Modify
                      </Button>
                      <ModifyModal
                        showModify={showModify}
                        setShowModify={setShowModify}
                      />

                      <Button
                        className="w-25 btn btn-light ms-2"
                        onClick={() => handleUserOne(user._id)}
                      >
                        Orders
                      </Button>
                      <OrderModal
                        userList={userList}
                        userId={userId}
                        showOrders={showOrders}
                        setShowOrders={setShowOrders}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Users;
