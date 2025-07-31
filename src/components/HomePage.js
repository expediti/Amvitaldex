import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 'heart',
    name: 'Heart & Cardiovascular',
    icon: '❤️',
    description: 'Check symptoms related to heart and blood circulation',
    color: '#e74c3c',
    path: '/heart-check'
  },
  {
    id: 'kidney',
    name: 'Kidney & Urinary',
    icon: '🫘',
    description: 'Analyze kidney and urinary system related symptoms',
    color: '#3498db',
    path: '/kidney-check'
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    icon: '🫁',
    description: 'Evaluate breathing and lung-related symptoms',
    color: '#2ecc71',
    path: '/respiratory-check'
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    icon: '🍎',
    description: 'Check stomach and digestive tract symptoms',
    color: '#f39c12',
    path: '/digestive-check'
  },
  {
    id: 'neurological',
    name: 'Nervous System',
    icon: '🧠',
    description: 'Analyze brain and nervous system symptoms',
    color: '#9b59b6',
    path: '/neurological-check'
  },
  {
    id: 'general',
    name: 'General Health',
    icon: '⚕️',
    description: 'Overall health and wellness check',
    color: '#1abc9c',
    path: '/general-check'
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (categoryPath) => {
    navigate(categoryPath);
  };

  return (
    <>
      <Hero />
      <main className="main-content">
        <div className="container">
          <section className="categories-section">
            <h2 className="section-title">Choose Your Health Category</h2>
            <div className="categories-grid">
              {categories.map(category => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onSelect={() => handleCategorySelect(category.path)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>VitalDx Health Platform</h1>
      
      <div className="tools-section">
        <h2>Health Assessment Tools</h2>
        
        <div className="tool-cards">
          <a href="/tools/anxiety.html" className="tool-card">
            <h3>🧘‍♀️ Anxiety Assessment</h3>
            <p>Check your anxiety levels and get recommendations</p>
          </a>
          
          <a href="/tools/covid.html" className="tool-card">
            <h3>🦠 COVID-19 Checker</h3>
            <p>Assess your COVID risk and get testing advice</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

