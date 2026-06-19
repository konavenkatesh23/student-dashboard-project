import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");

      if (remember) {
        localStorage.setItem("savedEmail", email);
      }

      toast.success("Login Successful!");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">

            {/* Left Side */}
            <div className="col-lg-6 d-none d-lg-block text-white">
              <h1 className="display-3 fw-bold">
                StudentPro
              </h1>

              <p className="lead mt-4">
                Modern Student Management Dashboard
                built with React, Bootstrap and Analytics.
              </p>

              <div className="mt-5">
                <h5>✔ Student Management</h5>
                <h5>✔ Dashboard Analytics</h5>
                <h5>✔ API Integration</h5>
                <h5>✔ Secure Authentication</h5>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-5 col-md-8">
              <div
                className="card border-0 shadow-lg"
                style={{
                  borderRadius: "25px",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="card-body p-5">

                  <div className="text-center mb-4">
                    <h2 className="fw-bold">
                      Welcome Back 👋
                    </h2>

                    <p className="text-muted">
                      Sign in to continue
                    </p>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="admin@gmail.com"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="********"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />
                  </div>

                  <div className="d-flex justify-content-between mb-4">

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={remember}
                        onChange={() =>
                          setRemember(!remember)
                        }
                      />

                      <label className="form-check-label">
                        Remember Me
                      </label>
                    </div>

                    <a href="#" className="text-decoration-none">
                      Forgot Password?
                    </a>

                  </div>

                  <button
                    className="btn btn-primary w-100 py-2"
                    onClick={handleLogin}
                  >
                    Login
                  </button>

                  <div className="text-center mt-4">
                    <small className="text-muted">
                      Demo Credentials
                    </small>

                    <br />

                    <small>
                      Email: admin@gmail.com
                    </small>

                    <br />

                    <small>
                      Password: admin123
                    </small>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default Login;