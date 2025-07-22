import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import TransactionList from "../components/TransactionList";


const { addTransaction } = useContext(TransactionContext);

addTransaction({
  id: Date.now(),
  title: "Salary",
  amount: 1000,
  date: "2025-07-21",
  type: "income", // or "expense"
});
