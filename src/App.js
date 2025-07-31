import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import SymptomChecker from './components/SymptomChecker';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Category Routes */}
          <Route path="/heart-check" element={
            <SymptomChecker category={{
              id: 'heart',
              name: 'Heart & Cardiovascular',
              icon: '❤️',
              description: 'Check symptoms related to heart and blood circulation',
              color: '#e74c3c'
            }} />
          } />
          
          <Route path="/kidney-check" element={
            <SymptomChecker category={{
              id: 'kidney',
              name: 'Kidney & Urinary',
              icon: '🫘',
              description: 'Analyze kidney and urinary system related symptoms',
              color: '#3498db'
            }} />
          } />
          
          <Route path="/respiratory-check" element={
            <SymptomChecker category={{
              id: 'respiratory',
              name: 'Respiratory System',
              icon: '🫁',
              description: 'Evaluate breathing and lung-related symptoms',
              color: '#2ecc71'
            }} />
          } />
          
          <Route path="/digestive-check" element={
            <SymptomChecker category={{
              id: 'digestive',
              name: 'Digestive System',
              icon: '🍎',
              description: 'Check stomach and digestive tract symptoms',
              color: '#f39c12'
            }} />
          } />
          
          <Route path="/neurological-check" element={
            <SymptomChecker category={{
              id: 'neurological',
              name: 'Nervous System',
              icon: '🧠',
              description: 'Analyze brain and nervous system symptoms',
              color: '#9b59b6'
            }} />
          } />
          
          <Route path="/general-check" element={
            <SymptomChecker category={{
              id: 'general',
              name: 'General Health',
              icon: '⚕️',
              description: 'Overall health and wellness check',
              color: '#1abc9c'
            }} />
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
