import { Link, useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaUserGraduate,
  FaUsers,
  FaUserCircle,
  FaCog,
  FaFileAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="sidebar p-3">

      <h3 className="mb-4 text-center">
        🎓 StudentPro
      </h3>

      <Link to="/dashboard" className="d-block mb-3">
        <FaChartPie className="me-2" />
        Dashboard
      </Link>

      <Link to="/students" className="d-block mb-3">
        <FaUserGraduate className="me-2" />
        Students
      </Link>

      <Link to="/users" className="d-block mb-3">
        <FaUsers className="me-2" />
        Users API
      </Link>

      <Link to="/profile" className="d-block mb-3">
        <FaUserCircle className="me-2" />
        Profile
      </Link>

      <Link to="/settings" className="d-block mb-3">
        <FaCog className="me-2" />
        Settings
      </Link>

      <Link to="/reports" className="d-block mb-3">
        <FaFileAlt className="me-2" />
        Reports
      </Link>

      <button
        className="btn btn-danger mt-4 w-100"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="me-2" />
        Logout
      </button>

    </div>
  );
}

export default Sidebar;