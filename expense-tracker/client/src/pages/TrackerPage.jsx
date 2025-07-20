import React, { useEffect, useState } from "react";
import Summary from "../components/Summary";
import Charts from "../components/Charts";
import DateFilter from "../components/DateFilter";
import FilterControls from "../components/FilterControls";
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
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`tracker-page ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      {/* 🌙 Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* 📋 LEFT PANEL */}
      <div className="left-panel">
        <h1 className="title">💸 Expense Tracker</h1>

        <section>
          <Summary />
        </section>

        <section>
          <Charts />
        </section>

        <section>
          <DateFilter />
          <FilterControls />
        </section>

        <section>
          <AddTransaction />
        </section>
      </div>

      {/* 🧾 RIGHT PANEL */}
      <div className="right-panel">
        <TransactionList />
      </div>
    </div>
  );
};

export default TrackerPage;
