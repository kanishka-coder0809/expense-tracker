import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const TransactionList = () => {
  const { transactions, loading, removeTransaction } = useContext(TransactionContext);

  if (loading) return <p style={{ color: "#ccc" }}>Loading transactions...</p>;

  console.log("✅ Transactions received:", transactions);

  const validTransactions = transactions.filter(
    (tx) =>
      (typeof tx.title === "string" || typeof tx.text === "string") &&
      typeof tx.amount === "number" &&
      !isNaN(tx.amount)
  );

  return (
    <div style={{ color: "#eee", marginTop: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>📋 Your Transactions</h2>

      {validTransactions.length === 0 ? (
        <p style={{ color: "#999" }}>No valid transactions yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {validTransactions.map((tx) => (
            <li
              key={tx._id}
              style={{
                background: tx.type === "income" ? "#ba76caff" : "#904e94ff",
                color: "#fff",
                padding: "1rem",
                borderRadius: "8px",
                marginBottom: "0.8rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              <div>
                <strong>
                  {tx.title?.trim() || tx.text?.trim() || "Untitled"}
                </strong>
                <div style={{ fontSize: "0.85rem", opacity: 0.85 }}>
                  ₹{tx.amount}
                </div>
              </div>
              <button
                onClick={() => removeTransaction(tx._id)}
                style={{
                  background: "transparent",
                  border: "1px solid #fff",
                  color: "#fff",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
