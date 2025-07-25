import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionList = () => {
  const { transactions, loading, deleteTransaction } = useContext(TransactionContext);

  if (loading) return <p style={{ color: "#ccc" }}>Loading transactions...</p>;

  const validTransactions = transactions.filter(
    (tx) => typeof tx.amount === "number" && !isNaN(tx.amount)
  );

  return (
    <div className="card transaction-list">
      <h3 className="card-title">📋 Your Transactions</h3>

      {validTransactions.length === 0 ? (
        <p className="no-transactions">No valid transactions yet.</p>
      ) : (
        <ul className="transaction-items">
          {validTransactions.map((tx) => (
            <li
              key={tx._id}
              className={`transaction-item ${tx.type === "income" ? "income" : "expense"}`}
            >
              <div className="transaction-info">
                <strong>
                  {tx.title?.trim() ||
                    tx.text?.trim() ||
                    tx.source?.trim() ||
                    tx.category?.trim() ||
                    "Untitled"}
                </strong>
                <div className="amount">₹{tx.amount}</div>
              </div>
              <button className="delete-btn" onClick={() => deleteTransaction(tx._id)}>
                DELETE
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;