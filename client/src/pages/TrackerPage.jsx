// src/pages/TrackerPage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import TransactionForm from "../components/TransactionForm";
import IncomeForm from "../components/IncomeForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import "../styles/main.css";

const TrackerPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="tracker-page">
      <div className="tracker-layout">
        {/* Sidebar */}
        <div className="left-panel">
          <div className="sidebar">
            <div className="sidebar-title">💼 WalletBuddy</div>
            <ul className="sidebar-menu">
              <li onClick={() => scrollToSection("summary")}>📊 Dashboard</li>
              <li onClick={() => scrollToSection("add-income")}>💰 Add Income</li>
              <li onClick={() => scrollToSection("add-expense")}>➕ Add Expense</li>
              <li onClick={() => scrollToSection("transactions")}>📋 Transactions</li>
            </ul>
          </div>
        </div>

        {/* Right panel sections */}
        <div className="right-panel">
          <section id="summary" className="card">
            <Summary />
          </section>

          <section id="add-income" className="card">
            <h2>💰 Add Income</h2>
            <IncomeForm />
          </section>

          <section id="add-expense" className="card">
            <h2>➕ Add Expense</h2>
            <TransactionForm />
          </section>

          <section id="transactions" className="card">
            <h2>📋 Expense Transactions</h2>
            <TransactionList />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
