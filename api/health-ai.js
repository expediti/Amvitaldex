export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { symptoms, questions, severity } = req.body;
    
    // Simple AI-like assessment (you can replace with real AI API later)
    const riskKeywords = [
      'chest pain', 'difficulty breathing', 'severe headache', 
      'blood', 'unconscious', 'suicide', 'self-harm'
    ];
    
    const hasHighRisk = symptoms.some(symptom => 
      riskKeywords.some(keyword => 
        symptom.toLowerCase().includes(keyword)
      )
    );
    
    // Generate assessment based on symptoms
    let assessment, urgency, recommendations;
    
    if (hasHighRisk) {
      urgency = 'URGENT';
      assessment = 'Your symptoms may indicate a serious condition that requires immediate medical attention.';
      recommendations = [
        'Seek emergency medical care immediately',
        'Call 911 if experiencing severe symptoms',
        'Do not wait - go to the nearest emergency room',
        'Have someone accompany you if possible'
      ];
    } else if (symptoms.length >= 4) {
      urgency = 'HIGH';
      assessment = 'You have multiple symptoms that should be evaluated by a healthcare professional.';
      recommendations = [
        'Schedule an appointment with your doctor within 24-48 hours',
        'Monitor symptoms and note any changes',
        'Avoid strenuous activities until evaluated',
        'Keep a symptom diary'
      ];
    } else if (symptoms.length >= 2) {
      urgency = 'MEDIUM';
      assessment = 'Your symptoms warrant medical attention but are not immediately life-threatening.';
      recommendations = [
        'Schedule a medical appointment within a week',
        'Rest and stay hydrated',
        'Monitor symptoms for changes',
        'Contact doctor if symptoms worsen'
      ];
    } else {
      urgency = 'LOW';
      assessment = 'Your symptoms are likely minor but monitoring is recommended.';
      recommendations = [
        'Monitor symptoms for 2-3 days',
        'Use home remedies as appropriate',
        'Schedule routine check-up if symptoms persist',
        'Maintain healthy lifestyle habits'
      ];
    }

    const response = {
      assessment,
      urgency,
      confidence: 'AI-assisted preliminary assessment',
      recommendations,
      disclaimer: 'This is AI-generated information and should not replace professional medical advice.',
      nextSteps: [
        'Consult with a healthcare provider for proper diagnosis',
        'Keep track of symptom changes',
        'Follow up as recommended'
      ],
      symptoms: symptoms,
      timestamp: new Date().toISOString()
    };

    res.status(200).json(response);

  } catch (error) {
    console.error('AI Assessment Error:', error);
    res.status(500).json({ 
      error: 'AI assessment unavailable',
      fallbackAssessment: 'Please consult with a healthcare professional for symptom evaluation.'
    });
  }
}
