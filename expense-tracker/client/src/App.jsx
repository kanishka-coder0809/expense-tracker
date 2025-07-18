import './App.css';
import Summary from './components/Summary';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import DateFilter from './components/DateFilter';
import { TransactionProvider } from './context/TransactionContext';
import ChartSummary from './components/ChartSummary'; // ✅ IMPORTED
import FilterControls from './components/FilterControls';

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <h1>💸 Expense Tracker</h1>
        <Summary />
        <ChartSummary /> {/* ✅ Add this to show chart */}
        <DateFilter />
        <AddTransaction />
        <TransactionList />
      </div>
    </TransactionProvider>
  );
}

export default App;
