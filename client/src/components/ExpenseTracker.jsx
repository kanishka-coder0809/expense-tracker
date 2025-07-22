import Summary from './Summary';
import AddTransaction from './AddTransaction';
import TransactionList from './TransactionList';
import DateFilter from './DateFilter';
import ChartSummary from './ChartSummary';
import FilterControls from './FilterControls';

const ExpenseTracker = () => {
  return (
    <div className="App">
      <h1>💸 Expense Tracker</h1>
      <Summary />
      <ChartSummary />
      <DateFilter />
      <AddTransaction />
      <TransactionList />
    </div>
  );
};

export default ExpenseTracker;
