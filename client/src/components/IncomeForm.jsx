import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const IncomeForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [incomeData, setIncomeData] = useState({
    amount: '',
    source: '',
    date: ''
  });

  const handleChange = (e) => {
    setIncomeData({ ...incomeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIncome = {
      ...incomeData,
      type: 'income', // this distinguishes it from 'expense'
    };

    addTransaction(newIncome);
    setIncomeData({ amount: '', source: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label className="form-label">Amount</label>
        <input
          type="number"
          name="amount"
          value={incomeData.amount}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Source</label>
        <input
          type="text"
          name="source"
          value={incomeData.source}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Date</label>
        <input
          type="date"
          name="date"
          value={incomeData.date}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>

      <button type="submit" className="form-button">Add Income</button>
    </form>
  );
};

export default IncomeForm;
