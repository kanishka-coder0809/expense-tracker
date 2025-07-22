import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Expense Tracker</div>
      {/* Optional right-side content */}
      <div style={styles.right}>
        {/* Example: User Icon */}
        <span role="img" aria-label="User">👤</span>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    width: '100%',
    height: '60px',
    backgroundColor: '#7c3aed', // Tailwind purple-600
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  right: {
    fontSize: '1.2rem'
  }
};

export default Navbar;
