import { useState } from "react";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const toggleDarkMode = () => {
  // 	setIsDarkMode(!isDarkMode);
  // };

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
              <a href="#">
                <i className="bx bx-home-alt icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bar-chart-alt-2 icon"></i>
                <span className="text nav-text">Revenue</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-bell icon bx-tada-hover"></i>
                <span className="text nav-text">Notifications</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-pie-chart-alt icon"></i>
                <span className="text nav-text">Analytics</span>
              </a>
            </li>

            <li className="nav-link">
              <a href="#">
                <i className="bx bx-package icon"></i>
                <span className="text nav-text">Orders</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="bottom-content">
          <li className="">
            <a href="#">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Logout</span>
            </a>
          </li>

          {/* <li className="mode" onClick={toggleDarkMode}>
						<div className="sun-moon">
							<i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon moon`}></i>
							<i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon sun`}></i>
						</div>
						<span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
						<div className="toggle-switch">
							<span
								className={`switch ${isDarkMode ? 'on' : 'off'}`}
								onClick={toggleDarkMode}
							></span>
						</div>
					</li> */}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
