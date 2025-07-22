import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track your income & expenses easily.</p>
        <button onClick={() => navigate('/login')} className="start-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
