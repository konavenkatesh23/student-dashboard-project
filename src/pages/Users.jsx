import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout>
      <h2 className="mb-4">Users Directory</h2>

      {/* Search Bar */}
      <div className="dashboard-card mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* User Cards */}
      <div className="row">
        {users
          .filter((user) =>
            `${user.firstName} ${user.lastName}`
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((user) => (
            <div
              className="col-lg-4 col-md-6 mb-4"
              key={user.id}
            >
              <div className="dashboard-card h-100">

                <div className="text-center">

                  <img
                    src={user.image}
                    alt={user.firstName}
                    className="rounded-circle mb-3"
                    width="100"
                    height="100"
                  />

                  <h5>
                    {user.firstName} {user.lastName}
                  </h5>

                  <p className="text-muted">
                    {user.company?.title}
                  </p>

                </div>

                <hr />

                <p>
                  <strong>Email:</strong>
                  <br />
                  {user.email}
                </p>

                <p>
                  <strong>Phone:</strong>
                  <br />
                  {user.phone}
                </p>

                <p>
                  <strong>Department:</strong>
                  <br />
                  {user.company?.department}
                </p>

              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
}

export default Users;