import '../css/Home.css'
import Sidebar from '../components/SideBar'
import '../css/Sidebar.css'
import PieCharts from "./PieChart";
import LineCharts from "./LineChart";
import Barcharts from "./BarCharts";
import Order from "./Order";
import '../css/Charts.css'

function Home() {
	return (
		<>
			<div className="container ">
				<Sidebar />
				<section className="home">
					<div className="text">Dashboard - Drachen</div>

					<div className="container letters">
						<div className="row">
							<div className="container mt-3">
								<h2 className="mt-3 text-center">Revenue</h2>
								<div className="row mt-3">
									<div className="col-4">
										<div className='bg rounded flex-column'>
											<h5>Weekly Sales</h5>
											<h3>$ 15,000</h3>
											<p>Increased by 60%</p>
										</div>
									</div>
									<div className="col-4 imgbg">
										<div className='bg2 rounded flex-column'>
											<h5>Weekly Orders</h5>
											<h3>$ 45,6334</h3>
											<p>Decreased by 10%</p>
										</div>
									</div>
									<div className="col-4">
										<div className='bg3 rounded flex-column'>
											<h5>Visitors Online</h5>
											<h3>$ 95,5741</h3>
											<p>Increased by 5%</p>
										</div>
									</div>
								</div>
							</div>
							<div className="container mt-3">
								<h2 className="mt-3 text-center">Analytics</h2>
								<div className="row mt-3">
									<div className="col-4 mt-3">
										<PieCharts />
									</div>
									<div className="col-8 mt-3">
										<Barcharts />
									</div>
									<div className="col-12 mt-3">
										<LineCharts />
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-4"></div>
									<Order />
								</div>
							</div>
						</div>
					</div>

				</section>
			</div>
		</>
	)
}

export default Home
