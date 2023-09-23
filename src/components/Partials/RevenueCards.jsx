import React from 'react'

function RevenueCards() {
	return (
		<>
			<div className="row mt-3">
				<div className="col-4 hop">
					<div className="bg bgimg fs-5 rounded flex-column">
						<div className=" ms-4">
							<h4>Weekly Sales</h4>
							<h3>$ 15,000</h3>
							<p>Increased by 60%</p>
						</div>
					</div>
				</div>
				<div className="col-4 hop">
					<div className="bg2 bgimg2 fs-5 rounded flex-column">
						<div className="ms-4">
							<h4>Weekly Orders</h4>
							<h3>$ 45,6334</h3>
							<p>Decreased by 10%</p>
						</div>
					</div>
				</div>
				<div className="col-4 hop">
					<div className="bg3 bgimg3 fs-5 rounded flex-column">
						<div className="ms-4">
							<h4>Visitors Online</h4>
							<h3>$ 95,5741</h3>
							<p>Increased by 5%</p>
						</div>
					</div>
				</div>
			</div>
		</>

	)
}

export default RevenueCards