import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackerPage from "./pages/TrackerPage";
import LoginPage from "./components/LoginPage";
import { TransactionProvider } from "./context/TransactionContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <TransactionProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/tracker"
            element={
              <>
                <Navbar />
                <div style={{ paddingTop: "60px" }}>
                  <TrackerPage />
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </TransactionProvider>
  );
}

export default App;
