import React from 'react';
import { FiArrowLeft, FiActivity } from 'react-icons/fi';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {!isHomePage && (
            <button className="back-button" onClick={handleBackToHome}>
              <FiArrowLeft size={24} />
            </button>
          )}
          
          <div className="logo" onClick={handleBackToHome} style={{cursor: 'pointer'}}>
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
