import React, { useContext, useRef, useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Charts from "./Charts";
import { TransactionContext } from "../context/TransactionContext";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  const dashboardRef = useRef(null);
  const incomeRef = useRef(null);
  const expenseRef = useRef(null);

  const { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const sectionsRef = { dashboardRef, incomeRef, expenseRef };

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newIncome = {
      id: Date.now(),
      type: "income",
      title,
      amount: parseFloat(amount),
      date,
    };

    addTransaction(newIncome);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const totalIncome = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const totalExpense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="dashboard-layout">
      <Sidebar sectionsRef={sectionsRef} />
      <div className="main-content">
        <Navbar />
        <div className="content-scroll">
          {/* 🏠 Dashboard Section */}
          <section ref={dashboardRef} className="section">
            <h2>Dashboard</h2>
            <div className="cards-container">
              <div className="card">
                <h4>Total Balance</h4>
                <p>₹{balance}</p>
              </div>
              <div className="card">
                <h4>Total Income</h4>
                <p>₹{totalIncome}</p>
              </div>
              <div className="card">
                <h4>Total Expense</h4>
                <p>₹{totalExpense}</p>
              </div>
            </div>

            {/* Pie Chart */}
            <Charts />
          </section>

          {/* 💰 Income Section */}
          <section ref={incomeRef} className="section">
            <h2>Income Overview</h2>

            <form onSubmit={handleAddIncome} className="income-form">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <button type="submit">Add Income</button>
            </form>

            <div className="income-list">
              <h3>📌 Income Transactions</h3>
              {transactions.filter((tx) => tx.type === "income").length === 0 ? (
                <p>No income added yet.</p>
              ) : (
                <ul>
                  {transactions
                    .filter((tx) => tx.type === "income")
                    .map((item) => (
                      <li key={item.id}>
                        <strong>{item.title}</strong> — ₹{item.amount} on {item.date}
                        <button onClick={() => deleteTransaction(item.id)}>❌</button>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </section>

          {/* 💸 Expense Section */}
          <section ref={expenseRef} className="section">
            <h2>Expense Tracker</h2>
            <div className="transactions">
              <h3>📋 Your Expense Transactions</h3>
              {transactions.filter((tx) => tx.type === "expense").length === 0 ? (
                <p>No expenses yet.</p>
              ) : (
                <ul>
                  {transactions
                    .filter((tx) => tx.type === "expense")
                    .map((item) => (
                      <li key={item.id}>
                        <strong>{item.title}</strong> — ₹{item.amount} on {item.date}
                        <button onClick={() => deleteTransaction(item.id)}>❌</button>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
