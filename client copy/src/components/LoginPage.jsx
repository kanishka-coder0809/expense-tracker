import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import IncomeGraph from "../components/IncomeGraph";
import "../styles/login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [showPassword, setShowPassword] = useState(false);

  // Load transactions from localStorage only on first load
  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) {
      setTransactions(JSON.parse(stored));
    }
  }, [setTransactions]);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const walletAmount = transactions.reduce(
    (total, t) => (t.type === "income" ? total + t.amount : total - t.amount),
    0
  );

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Expense Tracker</h1>
        <h2>Welcome Back</h2>
        <p>Please enter your details to log in</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/tracker";
          }}
        >
          <input type="email" placeholder="Email Address" required />
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              minLength="8"
              required
            />
          </div>

          <button type="submit">LOGIN</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>

      <div className="login-right">
        <div className="wallet-amount">
          <p>Your Current Wallet Balance</p>
          <h2>₹{walletAmount.toLocaleString()}</h2>
          <video
    src="/Login.mp4"
    autoPlay
    muted
    loop
    style={{ width: "100%", marginTop: "20px", borderRadius: "10px" }}
  >
    Your browser does not support the video tag.
  </video>
        </div>        
      </div>
    </div>
  );
};

export default LoginPage;
