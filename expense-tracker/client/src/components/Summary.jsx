import React from "react";
import "./Summary.css";

const Summary = () => {
  return (
    <div className="summary-cards">
      <div className="summary-card">
        <h4>Total Balance</h4>
        <p>₹12,500</p>
      </div>
      <div className="summary-card income">
        <h4>Income</h4>
        <p>₹20,000</p>
      </div>
      <div className="summary-card expense">
        <h4>Expense</h4>
        <p>₹7,500</p>
      </div>
    </div>
  );
};

export default Summary;
