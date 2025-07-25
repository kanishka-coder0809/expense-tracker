import React from "react";
import "../styles/login.css"; // reuse same styles

const SignUpPage = () => {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Create Account</h1>
        <p>Fill in your details to sign up</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Account created! Redirecting to login...");
            window.location.href = "/";
          }}
        >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" minLength="8" required />
          <button type="submit">SIGN UP</button>
          <p>
            Already have an account?{" "}
            <a href="/">Login</a>
          </p>
        </form>
      </div>

      <div className="login-right">
        <div className="wallet-amount">
          <p>Welcome to Expense Tracker</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
