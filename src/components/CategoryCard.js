import React from 'react';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category, onSelect }) => {
  return (
    <div 
      className="category-card"
      onClick={() => onSelect(category.id)}
      style={{ '--category-color': category.color }}
    >
      <div className="card-icon">
        <span className="icon">{category.icon}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{category.name}</h3>
        <p className="card-description">{category.description}</p>
        <div className="card-action">
          <span className="action-text">Start Check →</span>
        </div>
      </div>
      <div className="card-overlay"></div>
    </div>
  );
};

export default CategoryCard;
