import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import ResultsComponent from './ResultsComponent';
import { medicalData } from '../data/medicalData';
import '../styles/SymptomChecker.css';

const SymptomChecker = ({ category, onBack }) => {
  const [currentStep, setCurrentStep] = useState('quiz');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [results, setResults] = useState(null);

  const handleQuizComplete = (symptoms) => {
    setSelectedSymptoms(symptoms);
    
    // Calculate possible conditions based on symptoms
    const categoryData = medicalData[category.id] || medicalData.general;
    const possibleConditions = calculateConditions(symptoms, categoryData);
    
    setResults({
      symptoms,
      conditions: possibleConditions,
      recommendations: generateRecommendations(possibleConditions)
    });
    
    setCurrentStep('results');
  };

  const calculateConditions = (symptoms, categoryData) => {
    const conditions = [];
    
    categoryData.conditions.forEach(condition => {
      const matchingSymptoms = condition.symptoms.filter(symptom => 
        symptoms.some(selected => selected.toLowerCase().includes(symptom.toLowerCase()) || 
                     symptom.toLowerCase().includes(selected.toLowerCase()))
      );
      
      if (matchingSymptoms.length > 0) {
        const confidence = (matchingSymptoms.length / condition.symptoms.length) * 100;
        conditions.push({
          ...condition,
          matchingSymptoms,
          confidence: Math.min(confidence, 95) // Cap at 95%
        });
      }
    });
    
    return conditions.sort((a, b) => b.confidence - a.confidence).slice(0, 5);
  };

  const generateRecommendations = (conditions) => {
    const recommendations = [
      "Consult with a healthcare professional for proper diagnosis",
      "Keep track of your symptoms and their severity",
      "Maintain a healthy lifestyle with proper diet and exercise"
    ];
    
    if (conditions.length > 0 && conditions[0].confidence > 60) {
      recommendations.unshift("Consider scheduling an appointment with a specialist");
    }
    
    return recommendations;
  };

  const handleStartOver = () => {
    setSelectedSymptoms([]);
    setResults(null);
    setCurrentStep('quiz');
  };

  return (
    <div className="symptom-checker">
      <div className="container">
        <div className="checker-header">
          <div className="category-info">
            <span className="category-icon">{category.icon}</span>
            <h2 className="category-name">{category.name}</h2>
          </div>
          <p className="category-description">{category.description}</p>
        </div>

        {currentStep === 'quiz' && (
          <QuizComponent
            category={category}
            onComplete={handleQuizComplete}
          />
        )}

        {currentStep === 'results' && (
          <ResultsComponent
            results={results}
            category={category}
            onStartOver={handleStartOver}
            onBack={onBack}
          />
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
