import React from 'react';
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiRefreshCw, FiArrowLeft } from 'react-icons/fi';
import '../styles/ResultsComponent.css';

const ResultsComponent = ({ results, category, onStartOver, onBack }) => {
  const getConfidenceColor = (confidence) => {
    if (confidence >= 70) return '#e74c3c';
    if (confidence >= 50) return '#f39c12';
    return '#3498db';
  };

  const getConfidenceIcon = (confidence) => {
    if (confidence >= 70) return <FiAlertTriangle />;
    if (confidence >= 50) return <FiInfo />;
    return <FiCheckCircle />;
  };

  const getConfidenceText = (confidence) => {
    if (confidence >= 70) return 'High Match';
    if (confidence >= 50) return 'Moderate Match';
    return 'Low Match';
  };

  return (
    <div className="results-component">
      <div className="results-header">
        <h2 className="results-title">Your Health Analysis</h2>
        <p className="results-subtitle">
          Based on your selected symptoms, here are the possible conditions:
        </p>
      </div>

      <div className="selected-symptoms">
        <h3 className="section-title">
          <FiCheckCircle className="section-icon" />
          Selected Symptoms ({results.symptoms.length})
        </h3>
        <div className="symptoms-list">
          {results.symptoms.map((symptom, index) => (
            <span key={index} className="symptom-tag">
              {symptom}
            </span>
          ))}
        </div>
      </div>

      {results.conditions.length > 0 ? (
        <div className="conditions-section">
          <h3 className="section-title">
            <FiInfo className="section-icon" />
            Possible Conditions
          </h3>
          <div className="conditions-list">
            {results.conditions.map((condition, index) => (
              <div key={index} className="condition-card">
                <div className="condition-header">
                  <div className="condition-info">
                    <h4 className="condition-name">{condition.name}</h4>
                    <div 
                      className="confidence-badge"
                      style={{ 
                        backgroundColor: getConfidenceColor(condition.confidence),
                        color: 'white'
                      }}
                    >
                      {getConfidenceIcon(condition.confidence)}
                      <span>{Math.round(condition.confidence)}% {getConfidenceText(condition.confidence)}</span>
                    </div>
                  </div>
                </div>
                
                <p className="condition-description">{condition.description}</p>
                
                <div className="matching-symptoms">
                  <strong>Matching symptoms:</strong>
                  <div className="matching-list">
                    {condition.matchingSymptoms.map((symptom, idx) => (
                      <span key={idx} className="matching-symptom">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-conditions">
          <FiInfo className="no-conditions-icon" />
          <h3>No Specific Conditions Found</h3>
          <p>Your symptoms don't strongly match any specific conditions in our database. This could be normal or might require professional evaluation.</p>
        </div>
      )}

      <div className="recommendations-section">
        <h3 className="section-title">
          <FiAlertTriangle className="section-icon" />
          Recommendations
        </h3>
        <div className="recommendations-list">
          {results.recommendations.map((recommendation, index) => (
            <div key={index} className="recommendation-item">
              <FiCheckCircle className="recommendation-icon" />
              <span>{recommendation}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="disclaimer">
        <FiAlertTriangle className="disclaimer-icon" />
        <p>
          <strong>Important:</strong> This analysis is for informational purposes only and should not replace professional medical advice. Please consult with a healthcare provider for proper diagnosis and treatment.
        </p>
      </div>

      <div className="results-actions">
        <button className="btn btn-secondary" onClick={onBack}>
          <FiArrowLeft />
          Back to Categories
        </button>
        <button className="btn btn-primary" onClick={onStartOver}>
          <FiRefreshCw />
          Start New Check
        </button>
      </div>
    </div>
  );
};

export default ResultsComponent;
