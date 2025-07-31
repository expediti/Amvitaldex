export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { symptoms, exposureHistory, vaccination } = req.body;
    
    // COVID risk assessment logic
    const highRiskSymptoms = [
      'fever', 'dry cough', 'shortness of breath', 'loss of taste', 
      'loss of smell', 'difficulty breathing', 'chest pain'
    ];
    
    const moderateRiskSymptoms = [
      'fatigue', 'body aches', 'headache', 'sore throat', 
      'runny nose', 'nausea', 'diarrhea'
    ];

    // Calculate risk score
    let riskScore = 0;
    let matchedHighRisk = [];
    let matchedModerateRisk = [];

    symptoms.forEach(symptom => {
      const symptomLower = symptom.toLowerCase();
      if (highRiskSymptoms.some(risk => symptomLower.includes(risk))) {
        riskScore += 3;
        matchedHighRisk.push(symptom);
      } else if (moderateRiskSymptoms.some(risk => symptomLower.includes(risk))) {
        riskScore += 1;
        matchedModerateRisk.push(symptom);
      }
    });

    // Exposure history adds to risk
    if (exposureHistory.closeContact) riskScore += 4;
    if (exposureHistory.crowdedPlaces) riskScore += 2;
    if (exposureHistory.travel) riskScore += 1;

    // Vaccination status reduces risk
    if (vaccination.fullyVaccinated) riskScore -= 2;
    if (vaccination.boosted) riskScore -= 1;

    // Determine risk level
    let riskLevel, description, recommendations, urgency;

    if (riskScore >= 8) {
      riskLevel = 'High Risk';
      urgency = 'urgent';
      description = 'Your symptoms and exposure history suggest a high possibility of COVID-19.';
      recommendations = [
        'Get tested for COVID-19 immediately',
        'Isolate yourself from others',
        'Contact your healthcare provider',
        'Monitor symptoms closely',
        'Seek emergency care if breathing becomes difficult'
      ];
    } else if (riskScore >= 4) {
      riskLevel = 'Moderate Risk';
      urgency = 'high';
      description = 'You have symptoms that could indicate COVID-19.';
      recommendations = [
        'Get tested for COVID-19 within 24 hours',
        'Stay home and avoid contact with others',
        'Monitor your symptoms',
        'Contact healthcare provider if symptoms worsen',
        'Wear a mask if you must be around others'
      ];
    } else if (riskScore >= 1) {
      riskLevel = 'Low-Moderate Risk';
      urgency = 'medium';
      description = 'You have some symptoms that may indicate COVID-19, but risk appears lower.';
      recommendations = [
        'Consider getting tested for COVID-19',
        'Stay home if possible',
        'Monitor symptoms for changes',
        'Practice good hygiene',
        'Avoid close contact with vulnerable people'
      ];
    } else {
      riskLevel = 'Low Risk';
      urgency = 'low';
      description = 'Your current symptoms and exposure history suggest low COVID-19 risk.';
      recommendations = [
        'Continue monitoring your health',
        'Practice preventive measures',
        'Get tested if symptoms develop or worsen',
        'Follow local health guidelines'
      ];
    }

    const result = {
      riskLevel,
      riskScore,
      urgency,
      description,
      recommendations,
      matchedSymptoms: {
        highRisk: matchedHighRisk,
        moderateRisk: matchedModerateRisk
      },
      exposureFactors: exposureHistory,
      vaccinationStatus: vaccination,
      testingInfo: {
        shouldTest: riskScore >= 4,
        urgency: riskScore >= 8 ? 'immediate' : riskScore >= 4 ? 'within 24 hours' : 'if symptoms worsen'
      },
      isolationAdvice: riskScore >= 4 ? 'Isolate immediately' : 'Isolate if symptoms worsen',
      timestamp: new Date().toISOString()
    };

    res.status(200).json(result);
    
  } catch (error) {
    console.error('COVID assessment error:', error);
    res.status(500).json({ 
      error: 'Assessment processing failed',
      message: 'Please try again later'
    });
  }
}
