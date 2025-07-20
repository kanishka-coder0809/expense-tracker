import React, { useEffect, useState } from "react";
import Summary from "../components/Summary";
import Charts from "../components/Charts";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";

const TrackerPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") setIsDarkMode(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`tracker-page ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="tracker-layout">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <h1 className="title">💸 Expense Tracker</h1>

          <section className="summary-card">
            <Summary />
          </section>

          <section className="add-transaction-form">
            <AddTransaction />
          </section>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <section className="transaction-section">
            <TransactionList />
          </section>

          <section className="chart-section">
            <Charts />
          </section>
        </div>
      </div>
    </div>
  );
};

export default TrackerPage;
