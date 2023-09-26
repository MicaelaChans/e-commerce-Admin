import Sidebar from "./SideBar";
import "../css/Sidebar.css";

function Notifications() {
  return (
    <div className="container">
      <Sidebar />
      <section className="home">
        <div className="text">Notifications</div>
        <div className="container">
          <div className="container mt-3 text center"></div>
        </div>
      </section>
    </div>
  );
}

export default Notifications;
