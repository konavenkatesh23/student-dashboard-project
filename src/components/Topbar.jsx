import { FaBell, FaUserCircle } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Topbar() {
  return (
    <div className="topbar d-flex justify-content-between align-items-center">

      <div className="w-50">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search..."
        />
      </div>

      <div className="d-flex align-items-center gap-4">

        <ThemeToggle />

        <div className="position-relative">
          <FaBell size={22} />

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            3
          </span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <FaUserCircle size={35} />

          <div>
            <div className="fw-bold">
              Admin User
            </div>

            <small className="text-muted">
              Administrator
            </small>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Topbar;