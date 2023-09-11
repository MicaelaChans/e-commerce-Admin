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
          <div className="container">
            <div className="row">
              <div className="container text-center">
                <div className="row align-items-start">
                  <div className="col">One of three columns</div>
                  <div className="col">One of three columns</div>
                  <div className="col">One of three columns</div>
                </div>
              </div>
              <div className="container text-center">
                <div className="row align-items-end">
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
              <div className="container text-center">
                <div className="row align-items-end">
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
