import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const TransactionContext = createContext();

// Backend URL
const BACKEND_URL = 'http://localhost:5000/api/transactions'; // Update if deploying

// Provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch all transactions from MongoDB on mount
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch(BACKEND_URL);
        const data = await res.json();
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Failed to fetch transactions:", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // ✅ Add new transaction
  const addTransaction = async (transaction) => {
    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
      });

      const newTransaction = await res.json();
      setTransactions([...transactions, newTransaction]);
    } catch (error) {
      console.error('❌ Error adding transaction:', error);
    }
  };

  // ✅ Delete transaction
  const deleteTransaction = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/${id}`, {
        method: 'DELETE',
      });
      setTransactions(transactions.filter((t) => t._id !== id));
    } catch (error) {
      console.error('❌ Error deleting transaction:', error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,        // ✅ <-- Now included
        addTransaction,
        deleteTransaction,
        loading,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;