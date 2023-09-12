import React from "react";
import "./css/home.css";
import Nav from "./Nav";
import PieCharts from "./PieChart";
import LineCharts from "./LineChart";
import Barcharts from "./BarCharts";
import Order from "./Order";

function Home() {
  return (
    <>
      <div className="container mw-100">
        <Nav />

        <section className="Home">
          <div className="text">Dashboard</div>
          <div className="container text-center ">
            <div className="row d-flex">
              <div className="container ">
                <h2>Revenue</h2>
                <div className="row m-2 gap-2">
                  <div className="col-4 bg flex-column">
                    <h5>Weekly Sales</h5>
                    <h3>$ 15,000</h3>
                    <p>Increased by 60%</p>
                  </div>
                  <div className="col-4 bg flex-column">
                    <h5>Weekly Orders</h5>
                    <h3>$ 45,6334</h3>
                    <p>Decreased by 10%</p>
                  </div>
                  <div className="col-4 bg flex-column">
                    <h5>Visitors Online</h5>
                    <h3>$ 95,5741</h3>
                    <p>Increased by 5%</p>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <h2 className="mt-3">Analytics</h2>
                <div className="row mt-3">
                  <div className="col-4">
                    <PieCharts />
                  </div>
                  <div className="col-4">
                    <Barcharts />
                  </div>
                  <div className="col-4">
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
  );
}

export default Home;
