import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import SymptomChecker from './components/SymptomChecker';
import './App.css';

const categories = [
  {
    id: 'heart',
    name: 'Heart & Cardiovascular',
    icon: '❤️',
    description: 'Check symptoms related to heart and blood circulation',
    color: '#e74c3c'
  },
  {
    id: 'kidney',
    name: 'Kidney & Urinary',
    icon: '🫘',
    description: 'Analyze kidney and urinary system related symptoms',
    color: '#3498db'
  },
  {
    id: 'respiratory',
    name: 'Respiratory System',
    icon: '🫁',
    description: 'Evaluate breathing and lung-related symptoms',
    color: '#2ecc71'
  },
  {
    id: 'digestive',
    name: 'Digestive System',
    icon: '🍎',
    description: 'Check stomach and digestive tract symptoms',
    color: '#f39c12'
  },
  {
    id: 'neurological',
    name: 'Nervous System',
    icon: '🧠',
    description: 'Analyze brain and nervous system symptoms',
    color: '#9b59b6'
  },
  {
    id: 'general',
    name: 'General Health',
    icon: '⚕️',
    description: 'Overall health and wellness check',
    color: '#1abc9c'
  }
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
  };

  return (
    <Router>
      <div className="App">
        <Header onBackToHome={handleBackToHome} showBack={selectedCategory !== null} />
        
        <Routes>
          <Route path="/" element={
            <>
              {!selectedCategory ? (
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
                              onSelect={handleCategorySelect}
                            />
                          ))}
                        </div>
                      </section>
                    </div>
                  </main>
                </>
              ) : (
                <SymptomChecker 
                  category={categories.find(cat => cat.id === selectedCategory)}
                  onBack={handleBackToHome}
                />
              )}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
