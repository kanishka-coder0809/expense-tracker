// components/ExpenseCategoryChart.jsx
import React, { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TransactionContext } from "../context/TransactionContext";

const ExpenseCategoryChart = () => {
  const { transactions } = useContext(TransactionContext);

  // Group and sum expenses by category
  const data = transactions
    .filter(txn => txn.type === "Expense")
    .reduce((acc, txn) => {
      const existing = acc.find(item => item.category === txn.category);
      if (existing) {
        existing.amount += parseFloat(txn.amount);
      } else {
        acc.push({ category: txn.category, amount: parseFloat(txn.amount) });
      }
      return acc;
    }, []);

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseCategoryChart;
