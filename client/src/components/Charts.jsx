import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { TransactionContext } from "../context/TransactionContext";

const COLORS = ["#4caf50", "#f44336"]; // income, expense

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
    <div style={{ marginTop: "2rem", color: "#fff" }}>
      <h2>📊 Income vs Expense</h2>
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
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Charts;
