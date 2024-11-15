import React from 'react';
import './Header.css'; // Add custom styles if needed

const Header: React.FC = () => {
  return (
    <header className="my-header">
      <div className="container">
        <span className="my-header-title">My first React App</span>
      </div>
    </header>
  );
};

export default Header;