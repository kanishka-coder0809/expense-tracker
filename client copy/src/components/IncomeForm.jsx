import React, { useState, useContext, useMemo } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import './IncomeForm.css';

const IncomeForm = () => {
  const { addTransaction, transactions } = useContext(TransactionContext);
  const [incomeData, setIncomeData] = useState({
    amount: '',
    source: ''
  });

  const handleChange = (e) => {
    setIncomeData({ ...incomeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIncome = {
      ...incomeData,
      type: 'income',
      // Auto-set today's date if needed
      date: new Date().toISOString().split('T')[0]
    };

    addTransaction(newIncome);
    setIncomeData({ amount: '', source: '' });
  };

  // 📊 Filter and group income by date
  const dailyIncome = useMemo(() => {
    const incomeByDate = {};
    transactions
      .filter(tx => tx.type === 'income')
      .forEach(tx => {
        const date = tx.date || 'No Date';
        incomeByDate[date] = (incomeByDate[date] || 0) + Number(tx.amount);
      });

    return Object.entries(incomeByDate).map(([date, amount]) => ({
      date,
      amount,
    }));
  }, [transactions]);

  return (
    <div className="income-form-wrapper">
      <form onSubmit={handleSubmit} className="form income-form">
        <div className="form-group narrow">
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

        <div className="form-group narrow">
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

        <button type="submit" className="form-button">Add Income</button>
      </form>

      {/* 📈 Bar Chart beside form */}
      <div className="income-chart">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={dailyIncome}
            margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeForm;
