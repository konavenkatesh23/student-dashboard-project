import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { ToastContainer, toast } from "react-toastify";
import {
  FaUserGraduate,
  FaBook,
  FaUsers
} from "react-icons/fa";

function Students() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [
          { id: 1, name: "Venkatesh", course: "B.Tech" },
          { id: 2, name: "Ravi", course: "MCA" },
        ];
  });

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addOrUpdateStudent = () => {
    if (!name || !course) {
      toast.error("Please fill all fields");
      return;
    }

    if (editId) {
      setStudents(
        students.map((student) =>
          student.id === editId
            ? { ...student, name, course }
            : student
        )
      );

      toast.info("Student Updated");
      setEditId(null);
    } else {
      setStudents([
        ...students,
        {
          id: Date.now(),
          name,
          course,
        },
      ]);

      toast.success("Student Added");
    }

    setName("");
    setCourse("");
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter((student) => student.id !== id)
    );

    toast.warning("Student Deleted");
  };

  const editStudent = (student) => {
    setName(student.name);
    setCourse(student.course);
    setEditId(student.id);
  };

  return (
    <Layout>

      <h2 className="mb-4">Student Management</h2>

      {/* Statistics Cards */}

      <div className="row mb-4">

        <div className="col-md-4">
          <div className="dashboard-card">
            <FaUsers
              size={35}
              className="text-primary"
            />
            <h5 className="mt-3">
              Total Students
            </h5>
            <h2>{students.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <FaBook
              size={35}
              className="text-success"
            />
            <h5 className="mt-3">
              Courses
            </h5>
            <h2>12</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="dashboard-card">
            <FaUserGraduate
              size={35}
              className="text-danger"
            />
            <h5 className="mt-3">
              Active Students
            </h5>
            <h2>{students.length}</h2>
          </div>
        </div>

      </div>

      {/* Add Student */}

      <div className="dashboard-card mb-4">

        <h4 className="mb-3">
          {editId
            ? "Update Student"
            : "Add Student"}
        </h4>

        <div className="row">

          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Student Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          <div className="col-md-5">
            <input
              className="form-control"
              placeholder="Course"
              value={course}
              onChange={(e) =>
                setCourse(e.target.value)
              }
            />
          </div>

          <div className="col-md-2">
            <button
              className={`btn w-100 ${
                editId
                  ? "btn-warning"
                  : "btn-primary"
              }`}
              onClick={addOrUpdateStudent}
            >
              {editId
                ? "Update"
                : "Add"}
            </button>
          </div>

        </div>

      </div>

      {/* Search */}

      <div className="dashboard-card mb-4">
        <input
          className="form-control"
          placeholder="Search Student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* Student Table */}

      <div className="dashboard-card">

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {students
                .filter((student) =>
                  student.name
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((student) => (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.course}</td>

                    <td>

                      <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() =>
                          editStudent(student)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          deleteStudent(student.id)
                        }
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))}

            </tbody>

          </table>

        </div>

      </div>

      <ToastContainer />

    </Layout>
  );
}

export default Students;