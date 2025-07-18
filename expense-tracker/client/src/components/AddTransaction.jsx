// src/components/AddTransaction.jsx
import { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const AddTransaction = () => {
  const { createTransaction } = useContext(TransactionContext);
  const [form, setForm] = useState({
    title: '',
    amount: '',
    type: 'expense',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    createTransaction({
      ...form,
      amount: parseFloat(form.amount)
    });

    setForm({
      title: '',
      amount: '',
      type: 'expense',
      category: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>

      <label>Title:</label>
      <input
        type="text"
        placeholder="Enter title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <label>Amount:</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />

      <label>Type:</label>
      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <label>Category:</label>
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">➕ Add Transaction</button>
    </form>
  );
};

export default AddTransaction;
