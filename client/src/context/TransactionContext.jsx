import React, { createContext, useState, useEffect } from 'react';

export const TransactionContext = createContext();

const BACKEND_URL = 'http://localhost:5000/api/transactions';

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get logged-in user from localStorage
  const getCurrentUser = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    return user?.email || user?.username || null;
  };

  const currentUser = getCurrentUser();

  // ✅ Fetch user-specific transactions from MongoDB
  useEffect(() => {
    const fetchTransactions = async () => {
      if (!currentUser) return;

      try {
        const res = await fetch(`${BACKEND_URL}/user/${currentUser}`);
        const data = await res.json();
        setTransactions(data);
        setLoading(false);
      } catch (error) {
        console.error("❌ Failed to fetch transactions:", error);
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [currentUser]);

  // ✅ Add new transaction
  const addTransaction = async (transaction) => {
    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...transaction, user: currentUser }),
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
        setTransactions,
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
