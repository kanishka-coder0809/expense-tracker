import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);

  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.category || !formData.title) {
      alert('Please fill out all fields');
      return;
    }

    const newTransaction = {
      ...formData,
      type: 'expense', // defaulted to expense
      amount: parseFloat(formData.amount),
      date: new Date().toISOString().split('T')[0] // optional, if needed
    };

    await addTransaction(newTransaction);

    // Clear form after submit
    setFormData({
      title: '',
      amount: '',
      category: ''
    });
  };

  return (
    <div className="card add-transaction-form">
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g., Grocery shopping"
          />
        </label>

        <label>
          Amount
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </label>

        <label>
          Category
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select category</option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <button type="submit" className="submit-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
