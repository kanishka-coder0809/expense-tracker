import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const AddIncome = () => {
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [date, setDate] = useState("");
  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !source || !date) return;

    const newIncome = {
      id: Date.now(),
      type: "income",
      amount: parseFloat(amount),
      source,
      date,
    };
    addTransaction(newIncome);
    setAmount("");
    setSource("");
    setDate("");
  };

  return (
    <div className="add-income">
      <h3>Add Income</h3>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Income Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default AddIncome;