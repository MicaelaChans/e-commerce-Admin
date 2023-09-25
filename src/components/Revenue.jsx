import Sidebar from "./SideBar";
import "../css/Sidebar.css";
import RevenueCards from "./Partials/RevenueCards";

function Revenue() {
  return (
    <div className="container">
      <Sidebar />
      <section className="home">
        <div className="text">Revenue</div>
        <div className="container letters">
          <div className="container mt-3 text center"></div>
          <RevenueCards />
        </div>
      </section>
    </div>
  );
}

export default Revenue;
