import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const FilterControls = () => {
  const { fetchTransactions } = useContext(TransactionContext);
  const [type, setType] = useState("all");

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    fetchTransactions({ type: selectedType });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>Transaction Type</h3>
      <select value={type} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
    </div>
  );
};

export default FilterControls;
