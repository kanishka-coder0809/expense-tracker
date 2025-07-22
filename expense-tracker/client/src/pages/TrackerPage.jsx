import React from "react";
import Summary from "../components/Summary";
import Charts from "../components/Charts";
import AddTransaction from "../components/AddTransaction";
import TransactionList from "../components/TransactionList";
import DashboardLayout from "../components/DashboardLayout";

const TrackerPage = () => {
  return (
    <DashboardLayout>
      <div className="tracker-layout">
        {/* LEFT PANEL */}
        <div className="left-panel">
          {/* Summary Card */}
          <section className="summary-card">
            <Summary />
          </section>

          {/* Add Transaction Form */}
          <section className="add-transaction-form">
            <AddTransaction />
          </section>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* Transactions */}
          <section className="transaction-section">
            <TransactionList />
          </section>

          {/* Charts */}
          <section className="chart-section">
            <Charts />
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TrackerPage;
