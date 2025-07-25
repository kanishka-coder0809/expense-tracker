import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import IncomeGraph from "../components/IncomeGraph";
import "../styles/login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (transactions.length === 0) {
      // Only for testing the login page
      setTransactions([
        { id: 1, amount: 1200, type: "income", date: "2025-07-21" },
        { id: 2, amount: 900, type: "income", date: "2025-07-22" },
        { id: 3, amount: 1500, type: "income", date: "2025-07-23" },
        { id: 4, amount: 700, type: "income", date: "2025-07-24" },
      ]);
    }
  }, [transactions, setTransactions]);

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
          <p>Track Your Income & Expenses</p>
          <h2>₹{walletAmount.toLocaleString()}</h2>
        </div>
        <h3 style={{ marginLeft: "1rem", color: "#2149b5" }}>Daily Income</h3>
        <IncomeGraph />
      </div>
    </div>
  );
};

export default LoginPage;
