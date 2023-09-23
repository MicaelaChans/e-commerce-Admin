import "../css/Home.css";
import Sidebar from "./SideBar";
import "../css/Sidebar.css";
import PieCharts from "./PieChart";
import LineCharts from "./LineChart";
import Barcharts from "./BarCharts";
//import Orders from "./Orders";
import "../css/Charts.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
                  <div className="col-4 hop">
                    <div className="bg fs-5 rounded flex-column">
                      <div className="ms-4">
                        <h4>Weekly Sales</h4>
                        <h3>$ 15,000</h3>
                        <p>Increased by 60%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 hop">
                    <div className="bg2 fs-5 rounded flex-column">
                      <div className="ms-4">
                        <h4>Weekly Orders</h4>
                        <h3>$ 45,6334</h3>
                        <p>Decreased by 10%</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 hop">
                    <div className="bg3 fs-5 rounded flex-column">
                      <div className="ms-4">
                        <h4>Visitors Online</h4>
                        <h3>$ 95,5741</h3>
                        <p>Increased by 5%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mt-3">
                <h2 className="mt-3 text-center">Analytics</h2>
                <div className="row mt-3">
                  <div className="col-4 mt-3 hop">
                    <PieCharts />
                  </div>
                  <div className="col-8 mt-3 hop">
                    <Barcharts />
                  </div>
                  <div className="col-12 mt-4 hop">
                    <LineCharts />
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-3 pb-5">
              <div className="row">
                <div className="col-4"></div>
                <h2 className="mt-4">Orders</h2>
                {/* <Orders /> */}
              </div>
            </div>
            <ToastContainer position="top-right" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
