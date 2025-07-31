export default async function handler(req, res) {
  // Enable CORS for your domain
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
    const { answers } = req.body;
    
    // Calculate GAD-7 score
    const score = Object.values(answers).reduce((sum, val) => sum + parseInt(val), 0);
    
    // Determine anxiety level
    let level, description, recommendations;
    
    if (score <= 4) {
      level = 'Minimal';
      description = 'Your anxiety levels appear to be within normal range.';
      recommendations = [
        'Continue healthy lifestyle habits',
        'Practice regular stress management',
        'Monitor your mental health monthly'
      ];
    } else if (score <= 9) {
      level = 'Mild';
      description = 'You may be experiencing mild anxiety.';
      recommendations = [
        'Try relaxation techniques like deep breathing',
        'Consider mindfulness meditation apps',
        'Talk to someone you trust about your feelings',
        'Monitor symptoms for 2 weeks'
      ];
    } else if (score <= 14) {
      level = 'Moderate';
      description = 'You appear to be experiencing moderate anxiety.';
      recommendations = [
        'Consider speaking with a healthcare professional',
        'Look into therapy options (CBT is very effective)',
        'Practice daily stress management techniques',
        'Consider joining anxiety support groups'
      ];
    } else {
      level = 'Severe';
      description = 'You may be experiencing severe anxiety.';
      recommendations = [
        'Please consult a mental health professional soon',
        'Consider contacting a crisis helpline if needed',
        'Reach out to trusted friends/family for support',
        'Avoid alcohol and excessive caffeine'
      ];
    }

    const result = {
      score,
      maxScore: 21,
      level,
      description,
      recommendations,
      resources: {
        crisis: score >= 15 ? [
          '988 Suicide & Crisis Lifeline: 988',
          'Crisis Text Line: Text HOME to 741741'
        ] : [],
        apps: ['Headspace', 'Calm', 'Insight Timer', 'Sanvello'],
        therapy: ['Psychology Today', 'BetterHelp', 'Talkspace']
      },
      timestamp: new Date().toISOString()
    };

    res.status(200).json(result);
    
  } catch (error) {
    console.error('Anxiety assessment error:', error);
    res.status(500).json({ 
      error: 'Assessment processing failed',
      message: 'Please try again later'
    });
  }
}
