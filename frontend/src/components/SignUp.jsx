import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignUp.css";


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    adminCode: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, adminCode } = formData;

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (isAdmin) {
      if (adminCode !== "IWB-1234") {
        setError("Invalid admin code.");
        return;
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          username,
          email,
          password,
          role: isAdmin ? "admin" : "user",
          adminCode: isAdmin ? adminCode : undefined,
        }
      );

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="signup-ui-container">
      <div className="right-panel">
        <div className="signup-form-box">
          <h2>{isAdmin ? "Admin Sign Up" : "Create an account"}</h2>
          <p className="login-text">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="username"
                placeholder="Fullnames"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {isAdmin && (
              <div className="input-wrapper">
                <input
                  type="text"
                  name="adminCode"
                  placeholder="Enter Admin Code"
                  onChange={handleChange}
                  value={formData.adminCode}
                />
              </div>
            )}

            <div className="terms">
              <input type="checkbox" required className="tick" id="terms" />
              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>

            <div className="terms">
              <input
                type="checkbox"
                id="adminMode"
                className="tick"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)}
              />
              <label htmlFor="adminMode">Register as Admin</label>
            </div>
            {error && <p className="error">{error}</p>}

            <button type="submit" className="signup-btn">
              {isAdmin ? "Register Admin" : "Create account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
