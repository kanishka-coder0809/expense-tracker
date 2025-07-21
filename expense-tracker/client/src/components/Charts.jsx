import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { TransactionContext } from "../context/TransactionContext";

const COLORS = ["#4caf50", "#f44336"]; // income, expense

// Custom tooltip that adapts to theme
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const isDark = document.body.classList.contains("dark");

    const style = {
      backgroundColor: isDark ? "#222" : "#fff",
      color: isDark ? "#fff" : "#000",
      border: `1px solid ${isDark ? "#444" : "#ccc"}`,
      borderRadius: "6px",
      padding: "0.6rem 1rem",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      fontWeight: "500",
    };

    return (
      <div className="custom-tooltip" style={style}>
        <p>{`${payload[0].name}: ₹${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const Charts = () => {
  const { transactions } = useContext(TransactionContext);

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
  ];

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2 style={{ color: "var(--text)" }}>📊 Income vs Expense</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{
            color: "var(--text)", // ✅ dynamic legend color
            fontWeight: "500",
          }}
        />
      </PieChart>
    </div>
  );
};

export default Charts;
