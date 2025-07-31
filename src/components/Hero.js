import React from 'react';
import { FiActivity, FiShield, FiHeart, FiTrendingUp } from 'react-icons/fi';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Your Health, <span className="highlight">Analyzed</span>
            </h1>
            <p className="hero-description">
              Get instant insights into your symptoms with our AI-powered health checker. 
              Choose your category and discover possible conditions based on your symptoms.
            </p>
            <div className="hero-features">
              <div className="feature">
                <FiActivity className="feature-icon" />
                <span>Real-time Analysis</span>
              </div>
              <div className="feature">
                <FiShield className="feature-icon" />
                <span>Secure & Private</span>
              </div>
              <div className="feature">
                <FiHeart className="feature-icon" />
                <span>Health Focused</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <FiTrendingUp size={40} />
              <h3>Health Insights</h3>
              <p>Get personalized health recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
