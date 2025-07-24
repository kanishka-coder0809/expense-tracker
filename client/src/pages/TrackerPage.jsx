import React from "react";
import Sidebar from "../components/Sidebar";
import TransactionForm from "../components/TransactionForm";
import IncomeForm from "../components/IncomeForm";
import TransactionList from "../components/TransactionList";
import Summary from "../components/Summary";
import "../styles/main.css";

const TrackerPage = () => {
  return (
    <div className="tracker-page">
      <div className="tracker-layout">
        {/* Sidebar */}
        <div className="left-panel">
          <div className="sidebar">
            <div className="sidebar-title">💼 WalletBuddy</div>
            <ul className="sidebar-menu">
              <li onClick={() => document.getElementById("summary").scrollIntoView({ behavior: 'smooth' })}>📊 Summary</li>
              <li onClick={() => document.getElementById("add-expense").scrollIntoView({ behavior: 'smooth' })}>➕ Add Expense</li>
              <li onClick={() => document.getElementById("add-income").scrollIntoView({ behavior: 'smooth' })}>💰 Add Income</li>
              <li onClick={() => document.getElementById("transactions").scrollIntoView({ behavior: 'smooth' })}>📋 Transactions</li>
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
