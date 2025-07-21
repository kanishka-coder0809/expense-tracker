import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Charts from "./Charts"; // ✅ Only this is needed

const LoginPage = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      navigate("/tracker");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("username", name);
      navigate("/tracker");
    }, 2000);
  };

  return (
    <div className="login-container">
      {/* Left Side: Form */}
      <div className="form-section">
        <h1>Welcome Back 👋</h1>
        <h2>Login to your expense tracker</h2>
        <p>Enter your name to continue</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button className="signup-btn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="login-redirect">
          Don’t have an account? <a href="#">Sign up</a>
        </div>
      </div>

      {/* Right Side: Pie Chart */}
      <div className="graphic-section">
        <h2 style={{ color: "var(--purple)", marginBottom: "1rem" }}>Expenses Overview (July 2025)</h2>

        <div style={{ width: "100%", height: "400px" }}>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
