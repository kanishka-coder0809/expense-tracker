import React, { useContext } from 'react';
import { TransactionContext } from './TransactionContext';
import IncomeGraph from './IncomeGraph';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const IncomeGraph = () => {
  const { transactions } = useContext(TransactionContext);

  // Filter and prepare income data
  const incomeData = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, txn) => {
      const date = new Date(txn.date || txn.id.substring(0, 10)).toLocaleDateString('en-IN');
      const existing = acc.find((item) => item.date === date);
      if (existing) {
        existing.amount += Number(txn.amount);
      } else {
        acc.push({ date, amount: Number(txn.amount) });
      }
      return acc;
    }, []);

  if (incomeData.length === 0) {
    return <p style={{ padding: '1rem' }}>No income data to display.</p>;
  }

  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={incomeData}
          margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#a855f7" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeGraph;
