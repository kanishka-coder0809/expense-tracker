import React from "react";
import TrackerPage from "./pages/TrackerPage";
import { TransactionProvider } from "./context/TransactionContext"; // ✅ adjust path as needed

function App() {
  return (
    <TransactionProvider>
      <TrackerPage />
    </TransactionProvider>
  );
}

export default App;
