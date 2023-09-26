import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModifyModal({ showModify, setShowModify, UserID }) {
  const authToken = localStorage.getItem("authToken");

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
  });

  const [warningMsg, setWarningMsg] = useState("");

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/${UserID}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [UserID, authToken]);

  const Modifie = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8000/users/${UserID}`,
        {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          address: user.address,
          phone: user.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.data === "existent email already") {
        setWarningMsg("There's an existing account with this email");
      } else if (response.data === "existent phone already") {
        setWarningMsg("There's an existing account with this phone");
      } else {
        toast.success("User modified");
        setShowModify(false);
      }
    } catch (error) {
      console.error(error);
      setWarningMsg("Error modifying user. Please try again.");
    }
  };

  const handleSave = () => {
    Modifie();
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
          Modify User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <h6>
            Firstname:
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={user.firstname}
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
          </h6>
          <h6>
            Lastname:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={user.lastname}
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
          </h6>
          <h6>
            Email:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={user.email}
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </h6>
          <h6>
            Address:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={user.address}
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
            />
          </h6>
          <h6>
            Phone:{" "}
            <input
              className="ms-2 border-0 w-100 ps-2"
              type="text"
              placeholder={user.phone}
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
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
