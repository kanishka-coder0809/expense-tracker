// src/components/Summary.jsx
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + Number(tx.amount), 0);

  const balance = income - expense;

  const chartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#9b5de5", "#ff6b6b"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="card summary-box">
      <div className="summary-content">
        <div className="summary-text">
          <h2>💼 Dashboard</h2>
          <p><strong>Total Income:</strong> ₹{income}</p>
          <p><strong>Total Expense:</strong> ₹{expense}</p>
          <p><strong>Balance:</strong> ₹{balance}</p>
        </div>
        <div className="summary-chart">
          {transactions.length === 0 ? (
            <p>No data to display</p>
          ) : (
            <Pie data={chartData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
