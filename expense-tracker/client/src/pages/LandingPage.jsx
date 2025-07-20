// src/pages/LandingPage.jsx
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optional CSS file

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to 💸 Expense Tracker</h1>
      <p>Track your income, expenses, and manage your finances effectively.</p>
      <Link to="/login">
        <button className="landing-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
