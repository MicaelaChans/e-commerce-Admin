import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notFound">
      <h2>Error 404 - La página no existe</h2>
      <div className="d-flex align-items-center">
        <Link to="/">
          <h3>
            Do you want to go Home? <i className="bi bi-house"></i>
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
