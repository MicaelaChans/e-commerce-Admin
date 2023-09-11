import React from 'react'
import './css/home.css'
import Nav from './Nav'
import PieCharts from './PieChart'
import LineCharts from './LineChart'
// import Barcharts from './BarCharts'

function home() {
	return (
		<>
			<div className="container mw-100">
				<Nav />

				<section className="home">
					<div className="text">Dashboard</div>
					<div className="container">
						<div className="row">
							<div className="container text-center">
								<div className="row align-items-start">
									<div className="col">
										One of three columns
									</div>
									<div className="col">
										One of three columns
									</div>
									<div className="col">
										One of three columns
									</div>
								</div>
							</div>
							<div className="container text-center">
								<div className="row align-items-end">
									<div className="col">
										<LineCharts/>
									</div>
									<div className="col">
										<PieCharts/>
									</div>
									<div className="col">
										{/* <Barcharts/> */}
									</div>
								</div>
							</div>
						</div>
					</div>


					{/* <div className="chart-productos rounded">
						<PieChart
							series={[
								{
									data: [
										{ id: 0, value: 10, label: 'series A' },
										{ id: 1, value: 15, label: 'series B' },
										{ id: 2, value: 20, label: 'series C' },
										{ id: 3, value: 5, label: 'series D' },
										{ id: 4, value: 50, label: 'series E' },
									],
									innerRadius: 30,
									outerRadius: 100,
									paddingAngle: 5,
									cornerRadius: 5,
									startAngle: -90,
									endAngle: 180,
									cx: 150,
									cy: 150,
									height: 50,
									width: 50,
								}
							]}
						/>
					</div> */}

				</section>
			</div>
		</>
	)
}

export default home