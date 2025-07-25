import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const AddTransaction = () => {
  const { createTransaction } = useContext(TransactionContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("general");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) return;

    createTransaction({
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
    setType("expense");
    setCategory("general");
  };

  return (
    <form onSubmit={handleSubmit} className="add-transaction-form">
      <h2>➕ Add Transaction</h2>

      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Salary, Grocery"
          required
        />
      </div>

      <div className="form-group">
        <label>Amount (₹)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
      </div>

      <div className="form-group">
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="shopping">Shopping</option>
          <option value="utilities">Utilities</option>
          <option value="salary">Salary</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">Add Transaction</button>
    </form>
  );
};

export default AddTransaction;