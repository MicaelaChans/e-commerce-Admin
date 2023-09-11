import React, { useState } from 'react';
import './css/Nav.css'

function Nav() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const openSearch = () => {
		setIsSidebarOpen(true);
	};

	return (
		<nav className={`shadow sidebar ${isSidebarOpen ? '' : 'close'}`}>
			<header>
				<div className="image-text">
					<span className="image">
						Logo
						{/* <img src="logo.png" alt=""/> */}
					</span>

					<div className="text logo-text">
						<span className="name">Drachen ©</span>
						<span className="profession">Admin Panel</span>
					</div>
				</div>
				<i className='bx bx-chevron-left toggle' onClick={toggleSidebar}></i>
			</header>

			<div className="menu-bar">
				<div className="menu">
					<li className="search-box" onClick={openSearch}>
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
								<i className="bx bx-wallet icon"></i>
								<span className="text nav-text">Wallets</span>
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
				</div>
			</div>
		</nav>
	);
}

export default Nav