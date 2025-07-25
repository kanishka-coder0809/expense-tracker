import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const IncomeInput = () => {
  const { createTransaction } = useContext(TransactionContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return alert("Please fill in all fields");

    createTransaction({
      title,
      amount: Number(amount),
      type: "income",
      date,
    });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="card income-input">
      <h3 className="card-title">💰 Add Income</h3>
      <form onSubmit={handleAddIncome} className="form-group">
        <input
          type="text"
          placeholder="Income Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeInput;
