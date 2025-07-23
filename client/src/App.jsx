import React from "react";
import TrackerPage from "./pages/TrackerPage";
import { TransactionProvider } from "./context/TransactionContext";
import './styles/main.css'; // ✅ Ensure your CSS is connected here!

function App() {
  return (
    <TransactionProvider>
      <TrackerPage />
    </TransactionProvider>
  );
}

export default App;
