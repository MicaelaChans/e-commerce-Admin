import axios from "axios";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/SideBar";
import Button from "react-bootstrap/Button";
import OrderModal from "./OrderModal";
import ModifyModal from "./ModifyModal";
import { useSelector } from "react-redux";

function Users() {
  const authToken = useSelector((state) => state.admin.authToken);
  const apiUrl = import.meta.env.VITE_APP_API_URL;

  const [userList, setUserList] = useState([]);
  const [openModifyModal, setOpenModifyModal] = useState({});
  const [openOrderModal, setOpenOrderModal] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${apiUrl}/users`,
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  });

  const toggleModifyModal = (userId) => {
    setOpenModifyModal((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const toggleOrderModal = (userId) => {
    if (userId) {
      setOpenOrderModal((prevState) => ({
        ...prevState,
        [userId]: !prevState[userId],
      }));
    }
  };

  return (
    <div className="container ">
      <Sidebar />
      <section className="home">
        <div className="text">Users</div>
        <div className="container">
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
                        onClick={() => toggleModifyModal(user.id)}
                      >
                        Modify
                      </Button>
                      <ModifyModal
                        showModify={openModifyModal[user.id] || false}
                        setShowModify={(show) =>
                          setOpenModifyModal({
                            ...openModifyModal,
                            [user.id]: show,
                          })
                        }
                        UserID={user.id}
                      />

                      <Button
                        className="w-25 btn btn-light ms-2"
                        onClick={() => toggleOrderModal(user.id)}
                      >
                        Orders
                      </Button>
                      <OrderModal
                        showOrders={openOrderModal[user.id] || false}
                        setShowOrders={(show) =>
                          setOpenOrderModal({
                            ...openOrderModal,
                            [user.id]: show,
                          })
                        }
                        UserID={user.id}
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
