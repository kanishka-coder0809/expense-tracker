import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const DateFilter = () => {
  const { fetchTransactions } = useContext(TransactionContext);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleFilter = () => {
    fetchTransactions({ from, to });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>Date Filter</h3>
      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        type="date"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <button onClick={handleFilter}>Apply</button>
    </div>
  );
};

export default DateFilter;
