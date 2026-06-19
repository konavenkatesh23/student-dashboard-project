import Layout from "../components/Layout";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  return (
    <Layout>

      <h2 className="mb-4">My Profile</h2>

      <div className="dashboard-card text-center">

        <FaUserCircle
          size={120}
          className="text-primary mb-3"
        />

        <h3>Admin User</h3>

        <p className="text-muted">
          admin@gmail.com
        </p>

        <hr />

        <div className="row mt-4">

          <div className="col-md-4">
            <h5>Role</h5>
            <p>Administrator</p>
          </div>

          <div className="col-md-4">
            <h5>Department</h5>
            <p>Management</p>
          </div>

          <div className="col-md-4">
            <h5>Status</h5>
            <p className="text-success">
              Active
            </p>
          </div>

        </div>

      </div>

    </Layout>
  );
}

export default Profile;