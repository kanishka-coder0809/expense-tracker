import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Summary = () => {
  const { transactions, loading } = useContext(TransactionContext);

  if (loading) return <p>Loading summary...</p>;

  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = income - expense;

  return (
    <div style={{ color: "white" }}>
      <h2>Summary</h2>
      <p>💰 Income: ₹{income}</p>
      <p>💸 Expense: ₹{expense}</p>
      <p>🧾 Balance: ₹{balance}</p>
    </div>
  );
};

export default Summary;
