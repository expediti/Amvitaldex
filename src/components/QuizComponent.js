import React, { useState } from 'react';
import { medicalData } from '../data/medicalData';
import '../styles/QuizComponent.css';

const QuizComponent = ({ category, onComplete }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const categoryData = medicalData[category.id] || medicalData.general;
  const questions = categoryData.questions;

  const handleSymptomToggle = (symptom) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptom)) {
        return prev.filter(s => s !== symptom);
      } else {
        return [...prev, symptom];
      }
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      onComplete(selectedSymptoms);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-component">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="progress-text">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <div className="quiz-content">
        <div className="question-section">
          <h3 className="question-title">{currentQuestionData.question}</h3>
          <p className="question-subtitle">Select all that apply to you:</p>
        </div>

        <div className="symptoms-grid">
          {currentQuestionData.options.map((symptom, index) => (
            <div
              key={index}
              className={`symptom-option ${selectedSymptoms.includes(symptom) ? 'selected' : ''}`}
              onClick={() => handleSymptomToggle(symptom)}
            >
              <div className="option-checkbox">
                {selectedSymptoms.includes(symptom) && <span>✓</span>}
              </div>
              <span className="option-text">{symptom}</span>
            </div>
          ))}
        </div>

        <div className="quiz-actions">
          <button 
            className="btn btn-secondary" 
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          
          <div className="selected-count">
            {selectedSymptoms.length} symptoms selected
          </div>
          
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
          >
            {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
