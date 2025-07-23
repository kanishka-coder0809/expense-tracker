import { createContext, useEffect, useState } from 'react';
import { getTransactions, addTransaction, deleteTransaction } from '../services/TransactionService';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all transactions (income + expenses)
  const fetchTransactions = async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters).toString();
      const res = await getTransactions(params);
      setTransactions(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching transactions:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Add new income or expense transaction
  const createTransaction = async (data) => {
    try {
      const res = await addTransaction(data);
      setTransactions((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("❌ Error adding transaction:", err.message);
    }
  };

  // Delete transaction by ID
  const removeTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      setTransactions((prev) => prev.filter((tx) => tx._id !== id));
    } catch (err) {
      console.error("❌ Failed to delete transaction:", err.message);
    }
  };

  // Load all transactions on first render
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        loading,
        createTransaction,
        removeTransaction,
        fetchTransactions, // for future filters or refresh
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
