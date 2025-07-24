import React, { createContext, useState, useEffect } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
  const newTransaction = {
    ...transaction,
    amount: parseFloat(transaction.amount), // ✅ Convert string to number
    _id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
  };
  const updated = [...transactions, newTransaction];
  setTransactions(updated);
};


  const deleteTransaction = (id) => {
    const updated = transactions.filter((t) => t._id !== id);
    setTransactions(updated);
  };

  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, deleteTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
