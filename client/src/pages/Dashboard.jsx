import React, { useRef } from "react";
import Sidebar from "../components/Sidebar";
import Summary from "../components/Summary";
import IncomeInput from "../components/IncomeInput";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import "./Dashboard.css";

function Dashboard() {
  const incomeRef = useRef(null);
  const expenseRef = useRef(null);
  const dashboardRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        onDashboardClick={() => scrollToSection(dashboardRef)}
        onIncomeClick={() => scrollToSection(incomeRef)}
        onExpenseClick={() => scrollToSection(expenseRef)}
      />

      <div className="main-content">
        <div ref={dashboardRef}>
          <Summary />
        </div>

        <div ref={incomeRef}>
          <IncomeInput />
        </div>

        <div ref={expenseRef}>
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
