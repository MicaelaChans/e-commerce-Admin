import { useNavigate } from "react-router-dom";
import "../css/404.css";
function NotFound() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }
  return (
    <div className="notFound">
      <div className="num">404</div>
      <h1><span className="badge bg-danger">Error 404</span> - Page not found</h1>
      <div className="d-flex align-items-center">
        <button className="btn btnH rounded-pill shadow-large" onClick={goHome}>Go Home</button>
      </div>
    </div>
  );
}

export default NotFound;
