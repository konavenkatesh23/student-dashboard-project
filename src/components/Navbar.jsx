import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/dashboard">
          Student Dashboard
        </Link>

        <div className="d-flex align-items-center gap-2">

          <Link
            className="btn btn-light"
            to="/dashboard"
          >
            Dashboard
          </Link>

          <Link
            className="btn btn-light"
            to="/students"
          >
            Students
          </Link>

          <Link
            className="btn btn-light"
            to="/users"
          >
            Users API
          </Link>

          <ThemeToggle />

          <button
            className="btn btn-danger"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;