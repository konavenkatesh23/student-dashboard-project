import Layout from "../components/Layout";

import {
  FaUserGraduate,
  FaBook,
  FaChalkboardTeacher,
  FaArrowUp,
} from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const isDark =
    localStorage.getItem("theme") === "dark";

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: isDark ? "#ffffff" : "#000000",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? "#ffffff" : "#000000",
        },
        grid: {
          color: isDark
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        },
      },
      y: {
        ticks: {
          color: isDark ? "#ffffff" : "#000000",
        },
        grid: {
          color: isDark
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        },
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: isDark ? "#ffffff" : "#000000",
        },
      },
    },
  };

  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],
    datasets: [
      {
        label: "Student Growth",
        data: [50, 65, 80, 95, 110, 120],
        backgroundColor: "#3b82f6",
        borderRadius: 8,
      },
    ],
  };

  const pieData = {
    labels: ["B.Tech", "MCA", "MBA", "BCA"],
    datasets: [
      {
        data: [45, 20, 15, 20],
        backgroundColor: [
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <Layout>
      <h2 className="mb-4">
        Dashboard Analytics
      </h2>

      {/* KPI CARDS */}

      <div className="row">

        <div className="col-lg-4 mb-4">
          <div className="dashboard-card">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h5>Total Students</h5>

                <h2>120</h2>

                <span className="text-success">
                  <FaArrowUp /> 12%
                </span>
              </div>

              <FaUserGraduate
                size={50}
                className="text-primary"
              />

            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="dashboard-card">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h5>Total Courses</h5>

                <h2>15</h2>

                <span className="text-success">
                  <FaArrowUp /> 5%
                </span>
              </div>

              <FaBook
                size={50}
                className="text-success"
              />

            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="dashboard-card">
            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h5>Total Faculty</h5>

                <h2>25</h2>

                <span className="text-success">
                  <FaArrowUp /> 2%
                </span>
              </div>

              <FaChalkboardTeacher
                size={50}
                className="text-danger"
              />

            </div>
          </div>
        </div>

      </div>

      {/* CHARTS */}

      <div className="row">

        <div className="col-lg-8 mb-4">

          <div className="dashboard-card">
            <h4 className="mb-4">
              Student Growth Analytics
            </h4>

            <Bar
              data={barData}
              options={chartOptions}
            />
          </div>

        </div>

        <div className="col-lg-4 mb-4">

          <div className="dashboard-card">
            <h4 className="mb-4">
              Course Distribution
            </h4>

            <Pie
              data={pieData}
              options={pieOptions}
            />
          </div>

        </div>

      </div>

      {/* RECENT ACTIVITIES */}

      <div className="dashboard-card">

        <h4 className="mb-4">
          Recent Activities
        </h4>

        <ul className="list-group">

          <li className="list-group-item">
            ✅ Student Venkatesh Added
          </li>

          <li className="list-group-item">
            ✅ Student Ravi Updated
          </li>

          <li className="list-group-item">
            ✅ New Course Added
          </li>

          <li className="list-group-item">
            ✅ Faculty Information Updated
          </li>

          <li className="list-group-item">
            ✅ Dashboard Report Generated
          </li>

        </ul>

      </div>

    </Layout>
  );
}

export default Dashboard;