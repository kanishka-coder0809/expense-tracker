import React from 'react';

const Sidebar = ({ onNavigate, username }) => {
  return (
    <div className="card sidebar">
      <h2 className="sidebar-title">FinTrack</h2>
      
      <ul className="sidebar-menu">
        <li onClick={() => onNavigate('dashboard')}>📊 Dashboard</li>
        <li onClick={() => onNavigate('expense')}>💸 Expense</li>
        <li onClick={() => onNavigate('income')}>💰 Income</li>
        <li onClick={() => onNavigate('logout')}>🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
