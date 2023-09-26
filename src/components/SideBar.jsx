import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/adminSlice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(null));
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? "close" : ""}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img
              src="https://media.discordapp.net/attachments/834507105087782992/1150776993336528946/a82d91a7e0472978d6a0e9.png?width=676&height=676"
              alt=""
            />
          </span>

          <div className="text logo-text">
            <span className="name">Drachen ©</span>
            <span className="profession">Admin Panel</span>
          </div>
        </div>

        <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon"></i>
            <input type="text" placeholder="Search..." />
          </li>

          <ul className="menu-links">
            <li className="nav-link">
              <NavLink to="/" className="text-decoration-none">
                <div id="a">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </div>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/notifications" className="text-decoration-none">
                <div id="a">
                  <i className="bx bx-bell icon bx-tada-hover"></i>
                  <span className="text nav-text">Notifications</span>
                </div>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/revenue" className="text-decoration-none">
                <div id="a">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
                </div>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/analytics" className="text-decoration-none">
                <div id="a">
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </div>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/orders" className="text-decoration-none">
                <div id="a">
                  <i className="bx bx-package icon"></i>
                  <span className="text nav-text">Orders</span>
                </div>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/users" className="text-decoration-none">
                <div id="a">
                  <i className="bi bi-person icon"></i>
                  <span className="text nav-text">Users</span>
                </div>
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/staff-panel" className="text-decoration-none">
                <div id="a">
                  <i className="bx bxs-user-account icon"></i>
                  <span className="text nav-text">Staff Panel</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <NavLink
              onClick={() => handleLogout()}
              className="text-decoration-none"
            >
              <div id="a">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </div>
            </NavLink>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
