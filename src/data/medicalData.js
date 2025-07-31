export const medicalData = {
  heart: {
    questions: [
      {
        question: "Do you experience any chest-related symptoms?",
        options: [
          "Chest pain or discomfort",
          "Chest tightness",
          "Sharp chest pain",
          "Burning sensation in chest",
          "Pressure in chest",
          "None of the above"
        ]
      },
      {
        question: "How is your breathing?",
        options: [
          "Shortness of breath",
          "Difficulty breathing at rest",
          "Breathlessness during activity",
          "Rapid breathing",
          "Wheezing",
          "Normal breathing"
        ]
      },
      {
        question: "Have you noticed any heart rhythm changes?",
        options: [
          "Heart palpitations",
          "Irregular heartbeat",
          "Fast heart rate",
          "Slow heart rate",
          "Skipped heartbeats",
          "No changes noticed"
        ]
      }
    ],
    conditions: [
      {
        name: "Angina",
        description: "Chest pain or discomfort caused by reduced blood flow to the heart muscle.",
        symptoms: ["chest pain", "chest tightness", "shortness of breath", "pressure in chest"]
      },
      {
        name: "Heart Arrhythmia",
        description: "Irregular heartbeat that can cause the heart to beat too fast, too slow, or irregularly.",
        symptoms: ["heart palpitations", "irregular heartbeat", "fast heart rate", "slow heart rate", "skipped heartbeats"]
      },
      {
        name: "Heart Attack",
        description: "Serious condition where blood flow to part of the heart muscle is blocked.",
        symptoms: ["chest pain", "shortness of breath", "chest tightness", "pressure in chest", "sharp chest pain"]
      },
      {
        name: "Heart Failure",
        description: "Condition where the heart cannot pump blood effectively throughout the body.",
        symptoms: ["shortness of breath", "difficulty breathing at rest", "breathlessness during activity", "chest discomfort"]
      }
    ]
  },
  
  kidney: {
    questions: [
      {
        question: "Are you experiencing any urinary symptoms?",
        options: [
          "Frequent urination",
          "Painful urination",
          "Blood in urine",
          "Cloudy urine",
          "Strong-smelling urine",
          "Difficulty urinating",
          "No urinary symptoms"
        ]
      },
      {
        question: "Do you have any pain or discomfort?",
        options: [
          "Back pain (lower)",
          "Side pain (flank pain)",
          "Abdominal pain",
          "Burning sensation while urinating",
          "Pelvic pain",
          "No pain"
        ]
      },
      {
        question: "Have you noticed any swelling?",
        options: [
          "Swelling in legs",
          "Swelling in ankles",
          "Swelling in face",
          "Swelling around eyes",
          "General body swelling",
          "No swelling"
        ]
      }
    ],
    conditions: [
      {
        name: "Urinary Tract Infection (UTI)",
        description: "Infection in any part of the urinary system, including kidneys, bladder, or urethra.",
        symptoms: ["frequent urination", "painful urination", "burning sensation while urinating", "cloudy urine", "strong-smelling urine"]
      },
      {
        name: "Kidney Stones",
        description: "Hard deposits of minerals and salts that form in the kidneys.",
        symptoms: ["side pain", "back pain", "blood in urine", "frequent urination", "painful urination"]
      },
      {
        name: "Kidney Disease",
        description: "Condition where kidneys are damaged and cannot filter blood properly.",
        symptoms: ["swelling in legs", "swelling in ankles", "frequent urination", "blood in urine", "back pain"]
      },
      {
        name: "Bladder Infection",
        description: "Bacterial infection that affects the bladder, causing inflammation.",
        symptoms: ["frequent urination", "painful urination", "cloudy urine", "pelvic pain", "burning sensation while urinating"]
      }
    ]
  },

  respiratory: {
    questions: [
      {
        question: "What breathing difficulties are you experiencing?",
        options: [
          "Shortness of breath",
          "Difficulty breathing",
          "Rapid breathing",
          "Shallow breathing",
          "Cannot catch breath",
          "Breathing is normal"
        ]
      },
      {
        question: "Do you have a cough?",
        options: [
          "Dry cough",
          "Productive cough with phlegm",
          "Persistent cough",
          "Coughing up blood",
          "Night-time cough",
          "No cough"
        ]
      },
      {
        question: "Are you experiencing any chest symptoms?",
        options: [
          "Chest tightness",
          "Chest pain when breathing",
          "Wheezing",
          "Chest congestion",
          "Sharp chest pain",
          "No chest symptoms"
        ]
      }
    ],
    conditions: [
      {
        name: "Asthma",
        description: "Condition where airways narrow and swell, making breathing difficult.",
        symptoms: ["wheezing", "shortness of breath", "chest tightness", "persistent cough", "difficulty breathing"]
      },
      {
        name: "Pneumonia",
        description: "Infection that inflames air sacs in one or both lungs.",
        symptoms: ["productive cough with phlegm", "chest pain when breathing", "shortness of breath", "rapid breathing"]
      },
      {
        name: "Bronchitis",
        description: "Inflammation of the bronchial tubes that carry air to the lungs.",
        symptoms: ["persistent cough", "productive cough with phlegm", "chest congestion", "shortness of breath"]
      },
      {
        name: "COPD",
        description: "Chronic obstructive pulmonary disease that makes breathing difficult.",
        symptoms: ["shortness of breath", "persistent cough", "wheezing", "chest tightness", "difficulty breathing"]
      }
    ]
  },

  digestive: {
    questions: [
      {
        question: "What digestive symptoms are you experiencing?",
        options: [
          "Nausea",
          "Vomiting",
          "Diarrhea",
          "Constipation",
          "Bloating",
          "Gas",
          "No digestive symptoms"
        ]
      },
      {
        question: "Do you have any abdominal pain?",
        options: [
          "Upper abdominal pain",
          "Lower abdominal pain",
          "Cramping pain",
          "Sharp abdominal pain",
          "Burning stomach pain",
          "No abdominal pain"
        ]
      },
      {
        question: "Have you noticed changes in appetite or eating?",
        options: [
          "Loss of appetite",
          "Increased appetite",
          "Difficulty swallowing",
          "Heartburn",
          "Acid reflux",
          "No changes"
        ]
      }
    ],
    conditions: [
      {
        name: "Gastroenteritis",
        description: "Inflammation of the stomach and intestines, often called stomach flu.",
        symptoms: ["nausea", "vomiting", "diarrhea", "abdominal pain", "cramping pain"]
      },
      {
        name: "GERD (Acid Reflux)",
        description: "Condition where stomach acid frequently flows back into the esophagus.",
        symptoms: ["heartburn", "acid reflux", "burning stomach pain", "difficulty swallowing", "upper abdominal pain"]
      },
      {
        name: "Irritable Bowel Syndrome (IBS)",
        description: "Common disorder affecting the large intestine causing cramping and pain.",
        symptoms: ["abdominal pain", "bloating", "gas", "diarrhea", "constipation", "cramping pain"]
      },
      {
        name: "Peptic Ulcer",
        description: "Open sores that develop on the inside lining of the stomach or small intestine.",
        symptoms: ["burning stomach pain", "upper abdominal pain", "nausea", "loss of appetite", "bloating"]
      }
    ]
  },

  neurological: {
    questions: [
      {
        question: "Are you experiencing any head-related symptoms?",
        options: [
          "Headache",
          "Severe headache",
          "Migraine",
          "Dizziness",
          "Light sensitivity",
          "No head symptoms"
        ]
      },
      {
        question: "Do you have any cognitive or mental symptoms?",
        options: [
          "Memory problems",
          "Confusion",
          "Difficulty concentrating",
          "Mood changes",
          "Anxiety",
          "No cognitive symptoms"
        ]
      },
      {
        question: "Are you experiencing any physical neurological symptoms?",
        options: [
          "Numbness",
          "Tingling",
          "Muscle weakness",
          "Tremors",
          "Balance problems",
          "No physical symptoms"
        ]
      }
    ],
    conditions: [
      {
        name: "Migraine",
        description: "Neurological condition causing severe headaches often with other symptoms.",
        symptoms: ["severe headache", "migraine", "light sensitivity", "nausea", "dizziness"]
      },
      {
        name: "Tension Headache",
        description: "Most common type of headache characterized by mild to moderate pain.",
        symptoms: ["headache", "muscle tension", "difficulty concentrating", "mood changes"]
      },
      {
        name: "Peripheral Neuropathy",
        description: "Condition resulting from damage to peripheral nerves causing weakness and pain.",
        symptoms: ["numbness", "tingling", "muscle weakness", "balance problems"]
      },
      {
        name: "Anxiety Disorder",
        description: "Mental health condition characterized by excessive worry and fear.",
        symptoms: ["anxiety", "mood changes", "difficulty concentrating", "tremors", "dizziness"]
      }
    ]
  },

  general: {
    questions: [
      {
        question: "How is your general energy and well-being?",
        options: [
          "Fatigue",
          "Weakness",
          "Loss of energy",
          "Feeling unwell",
          "Normal energy levels"
        ]
      },
      {
        question: "Do you have any fever or temperature-related symptoms?",
        options: [
          "Fever",
          "Chills",
          "Night sweats",
          "Hot flashes",
          "No temperature symptoms"
        ]
      },
      {
        question: "Are you experiencing any pain or discomfort?",
        options: [
          "Body aches",
          "Joint pain",
          "Muscle pain",
          "General discomfort",
          "No pain"
        ]
      }
    ],
    conditions: [
      {
        name: "Viral Infection",
        description: "Common infection caused by viruses affecting various body systems.",
        symptoms: ["fever", "fatigue", "body aches", "chills", "weakness"]
      },
      {
        name: "Flu (Influenza)",
        description: "Respiratory illness caused by influenza viruses.",
        symptoms: ["fever", "chills", "body aches", "fatigue", "muscle pain"]
      },
      {
        name: "Chronic Fatigue Syndrome",
        description: "Condition characterized by extreme fatigue that doesn't improve with rest.",
        symptoms: ["fatigue", "weakness", "loss of energy", "joint pain", "muscle pain"]
      },
      {
        name: "Fibromyalgia",
        description: "Disorder characterized by widespread musculoskeletal pain.",
        symptoms: ["muscle pain", "joint pain", "fatigue", "general discomfort", "weakness"]
      }
    ]
  }
};
