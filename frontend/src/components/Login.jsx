import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    adminCode: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCount, setAdminCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/admin-count");
        const data = await response.json();
        setAdminCount(data.count);
      } catch (err) {
        console.error("Error fetching admin count:", err);
      }
    };

    fetchAdminCount();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, adminCode } = formData;

    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setSuccessMessage("Login successful!");

        if (data.isAdmin) {
          setIsAdmin(true);
        }

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again.");
    }
  };

  const handleAdminCodeSubmit = async () => {
    const { adminCode } = formData;

    if (adminCode !== "IWB-1234") {
      setError("Invalid admin code.");
      return;
    }

    setSuccessMessage("Admin login successful!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="login-page-body">
      <div className="login-page-container">
        <div className="login-page-right-panel-container">
          <div className="login-page-right-panel">
            <div className="login-page-signup-form-box">
              <h2>Welcome back</h2>
              <form onSubmit={handleSubmit}>
                <div className="login-page-input-wrapper">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="login-page-input-wrapper">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && <p className="login-page-error">{error}</p>}
                {successMessage && (
                  <p className="login-page-success-message">{successMessage}</p>
                )}

                <button type="submit" className="login-page-signup-btn">
                  Login
                </button>

                <p className="login-page-login-text">
                  Do not have an account? <a href="/signup">Sign Up</a>
                </p>

                {isAdmin && adminCount < 3 && (
                  <div className="login-page-input-wrapper admin-code">
                    <input
                      type="text"
                      name="adminCode"
                      placeholder="Enter Admin Code"
                      value={formData.adminCode}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      onClick={handleAdminCodeSubmit}
                      className="login-page-admin-btn"
                    >
                      Submit Admin Code
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
