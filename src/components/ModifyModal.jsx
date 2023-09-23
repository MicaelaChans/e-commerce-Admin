import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModifyModal({ showModify, setShowModify }) {
  const authToken = localStorage.getItem("authToken");

  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setShowModify(false);
  };

  return (
    <Modal
      show={showModify}
      onHide={() => setShowModify(false)}
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifie User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <h6>
            Firstname:
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={userData.firstname}
              name="firstname"
              value={userData.firstname}
              onChange={handleInputChange}
            />
          </h6>
          <h6>
            Lastname:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={userData.lastname}
              name="lastname"
              value={userData.lastname}
              onChange={handleInputChange}
            />
          </h6>
          <h6>
            Email:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={userData.email}
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </h6>
          <h6>
            Address:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={userData.address}
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
          </h6>
          <h6>
            Phone:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={userData.phone}
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
            />
          </h6>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="dark text-white"
          className="btn btn-outline-dark w-25"
          onClick={() => setShowModify(false)}
        >
          Cancel
        </Button>
        <Button
          variant="dark text-white"
          className="btn btn-outline-dark w-25"
          onClick={handleSave}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModifyModal;
