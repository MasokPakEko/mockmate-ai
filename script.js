function generateQuestions() {

  const vacancy =
    document.getElementById("vacancy").value.toLowerCase();

  let questions = [];

  const jobCategories = {

    education: {
      keywords: [
        "teacher",
        "tutor",
        "educator",
        "instructor",
        "school",
        "curriculum",
        "student"
      ],

      questions: [
        "How do you engage students during lessons?",
        "Describe your teaching philosophy.",
        "How do you handle difficult students?"
      ]
    },

    technology: {
      keywords: [
        "coding",
        "robotics",
        "developer",
        "programming",
        "software",
        "wordpress",
        "chatgpt",
        "ai"
      ],

      questions: [
        "Describe a technical project you worked on.",
        "How do you solve coding problems?",
        "How do you explain technical concepts?"
      ]
    },

    administration: {
      keywords: [
        "admin",
        "assistant",
        "office",
        "data entry",
        "excel",
        "report"
      ],

      questions: [
        "How do you prioritize multiple tasks?",
        "Describe your organizational skills.",
        "How do you maintain accuracy?"
      ]
    },

    translation: {
      keywords: [
        "translation",
        "proofreading",
        "translator",
        "english",
        "german"
      ],

      questions: [
        "How do you maintain translation accuracy?",
        "Describe your proofreading workflow.",
        "How do you handle technical terminology?"
      ]
    }

  };

  for (const category in jobCategories) {

    const keywords =
      jobCategories[category].keywords;

    const matched = keywords.some(keyword =>
      vacancy.includes(keyword)
    );

    if (matched) {

      questions =
        jobCategories[category].questions;

      break;

    }

  }

  if (questions.length === 0) {

    questions = [
      "Tell me about yourself.",
      "Why are you interested in this role?",
      "What are your strengths and weaknesses?"
    ];

  }

  let output = `
    <h2>Mock Interview Questions</h2>
    <ul>
  `;

  questions.forEach(question => {
    output += `<li>${question}</li>`;
  });

  output += `</ul>`;

  document.getElementById("questions").innerHTML = output;

}