import { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionList = () => {
  const { transactions, removeTransaction, loading } = useContext(TransactionContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            <strong>{tx.title}</strong> - ₹{tx.amount} [{tx.type}]
            {tx.category && <> | Category: {tx.category}</>}
            <button onClick={() => removeTransaction(tx._id)} style={{ marginLeft: '10px' }}>
              🗑 Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
