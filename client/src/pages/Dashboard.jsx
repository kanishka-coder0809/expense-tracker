import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransactionContext';
import { v4 as uuidv4 } from 'uuid';

const DashboardLayout = () => {
  const { transactions, addTransaction, deleteTransaction } = useContext(TransactionContext);

  const [incomeAmount, setIncomeAmount] = useState('');
  const [incomeDesc, setIncomeDesc] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseDesc, setExpenseDesc] = useState('');

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const balance = totalIncome - totalExpense;

  const handleAddIncome = () => {
    if (incomeAmount && incomeDesc) {
      addTransaction({
        id: uuidv4(),
        amount: incomeAmount,
        description: incomeDesc,
        type: 'income',
      });
      setIncomeAmount('');
      setIncomeDesc('');
    }
  };

  const handleAddExpense = () => {
    if (expenseAmount && expenseDesc) {
      addTransaction({
        id: uuidv4(),
        amount: expenseAmount,
        description: expenseDesc,
        type: 'expense',
      });
      setExpenseAmount('');
      setExpenseDesc('');
    }
  };

  return (
    <div>
      {/* Summary Section */}
      <section id="summary" className="card summary-box">
        <div className="summary-content">
          <div className="summary-text">
            <h2>Total Income: ₹{totalIncome}</h2>
            <h2>Total Expense: ₹{totalExpense}</h2>
            <h2>Balance: ₹{balance}</h2>
          </div>
        </div>
      </section>

      {/* Income Form */}
      <section id="income-form" className="card income-input-container">
        <h3>Add Income</h3>
        <div className="income-form">
          <input
            type="number"
            placeholder="Amount"
            value={incomeAmount}
            onChange={(e) => setIncomeAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={incomeDesc}
            onChange={(e) => setIncomeDesc(e.target.value)}
          />
          <button onClick={handleAddIncome}>Add Income</button>
        </div>
      </section>

      {/* Expense Form */}
      <section id="expense-form" className="card income-input-container">
        <h3>Add Expense</h3>
        <div className="income-form">
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={expenseDesc}
            onChange={(e) => setExpenseDesc(e.target.value)}
          />
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </section>

      {/* Transactions */}
      <section id="transactions" className="transaction-list card">
        <h3>Transactions</h3>
        <ul className="transaction-items">
          {transactions.length === 0 ? (
            <li className="no-transactions">No transactions yet.</li>
          ) : (
            transactions.map((txn) => (
              <li key={txn.id} className={`transaction-item ${txn.type}`}>
                <div className="transaction-info">
                  <strong>{txn.description}</strong>
                  <span className="amount">₹{txn.amount}</span>
                </div>
                <button className="delete-btn" onClick={() => deleteTransaction(txn.id)}>
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default DashboardLayout;
