import React from 'react';
import { FiArrowLeft, FiActivity } from 'react-icons/fi';
import '../styles/Header.css';

const Header = ({ onBackToHome, showBack }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {showBack && (
            <button className="back-button" onClick={onBackToHome}>
              <FiArrowLeft size={24} />
            </button>
          )}
          
          <div className="logo">
            <FiActivity className="logo-icon" />
            <h1 className="logo-text">VitalDex</h1>
          </div>
          
          <div className="header-actions">
            <span className="tagline">Your Health Companion</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
