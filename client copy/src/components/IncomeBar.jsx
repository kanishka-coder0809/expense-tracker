// components/IncomeBarChart.jsx
import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const IncomeBarChart = () => {
  const { transactions } = useContext(TransactionContext);

  // Filter only income transactions and format date
  const incomeData = transactions
    .filter(tx => tx.type === "income")
    .reduce((acc, tx) => {
      const date = new Date(tx.date).toLocaleDateString("en-GB");
      const existing = acc.find(item => item.date === date);
      if (existing) {
        existing.amount += tx.amount;
      } else {
        acc.push({ date, amount: tx.amount });
      }
      return acc;
    }, []);

  return (
    <div style={{ overflowX: "auto", width: "100%", marginTop: "1rem" }}>
      <div style={{ minWidth: "600px", height: "250px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#28a745" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeBarChart;
