// src/components/IncomeGraph.jsx
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "../styles/main.css"; // optional if styling needed

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const IncomeGraph = () => {
  const { transactions } = useContext(TransactionContext);

  // Filter only income entries
  const incomeData = transactions.filter((tx) => tx.type === "income");

  // Group income by date
  const incomeByDate = {};
  incomeData.forEach((tx) => {
    const date = new Date(tx.date).toLocaleDateString("en-IN");
    incomeByDate[date] = (incomeByDate[date] || 0) + tx.amount;
  });

  const labels = Object.keys(incomeByDate);
  const data = Object.values(incomeByDate);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Daily Income",
        data,
        backgroundColor: "#a855f7", // pastel/neon purple
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { ticks: { color: "#555" } },
      y: { ticks: { color: "#555" }, beginAtZero: true },
    },
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "auto", marginTop: "1rem" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default IncomeGraph;
