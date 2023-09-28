import "../css/Home.css";
import Sidebar from "./SideBar";
import "../css/Sidebar.css";
import PieCharts from "./Partials/PieChart";
import LineCharts from "./Partials/LineChart";
import Barcharts from "./Partials/BarCharts";
import OrdersTable from "./Partials/OrdersTable";
import "../css/Charts.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RevenueCards from "./Partials/RevenueCards.jsx";
import "../css/Cards.css";

function Home() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <section className="home">
          <div className="text">Dashboard - Drachen</div>
          <div className="container">
            <div className="row">
              <div className="container mt-3">
                <h2 className="mt-3 text-center">Revenue</h2>
                <RevenueCards />
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
                <OrdersTable />
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
