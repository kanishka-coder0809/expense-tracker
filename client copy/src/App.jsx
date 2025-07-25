import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import TrackerPage from "./pages/TrackerPage";
import { TransactionProvider } from "./context/TransactionContext";
import SignUpPage from "./pages/SignUpPage";
import './styles/main.css';

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/tracker" element={<TrackerPage />} />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;