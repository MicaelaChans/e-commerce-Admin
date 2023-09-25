import Sidebar from "./SideBar";
import "../css/Sidebar.css";
import PieCharts from "./Partials/PieChart";
import LineCharts from "./Partials/LineChart";
import Barcharts from "./Partials/BarCharts";
import "../css/Charts.css";

function Analytics() {
  return (
    <div className="container">
      <Sidebar />
      <section className="home">
        <div className="text">Analytics</div>
        <div className="container letters">
          <div className="container mt-3 text center"></div>
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
      </section>
    </div>
  );
}

export default Analytics;
