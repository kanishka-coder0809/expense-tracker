import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { TransactionContext } from "../context/TransactionContext";

const IncomeGraph = () => {
  const { transactions } = useContext(TransactionContext);

  // Step 1: Filter income transactions
  const incomeTransactions = transactions.filter((t) => t.type === "income");

  // Step 2: Group by date and sum amounts
  const incomeMap = {};

  incomeTransactions.forEach((t) => {
    const dateKey = new Date(t.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });

    if (!incomeMap[dateKey]) {
      incomeMap[dateKey] = 0;
    }

    incomeMap[dateKey] += t.amount;
  });

  // Step 3: Convert to array format for Recharts
  const incomeData = Object.entries(incomeMap).map(([date, amount]) => ({
    date,
    amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={incomeData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#9370DB" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default IncomeGraph;
