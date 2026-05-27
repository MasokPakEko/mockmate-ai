function getRandomQuestions(array, amount) {
  return array.sort(() => 0.5 - Math.random()).slice(0, amount);
}

function generateQuestions() {
  // Vacancy Input
  const vacancy = document.getElementById("jobInput").value.toLowerCase();
  const validationMessage = document.getElementById("validationMessage");
  // Validation
  //if textarea is empty, stop generation
  if (vacancy.trim() === "") {
    validationMessage.style.display = "block";

    validationMessage.textContent = "[ERROR] Please paste a job vacancy first.";

    return;
  }

  // Hide validation message if input exists
  validationMessage.style.display = "none";
  // Question Storage
  let questions = [];
  let detectedCategories = [];

  // Job Category Database
  const jobCategories = {
    education: {
      keywords: [
        "teacher",
        "tutor",
        "educator",
        "instructor",
        "school",
        "curriculum",
        "student",
      ],

      questions: [
        "How do you engage students during lessons?",
        "Describe your teaching philosophy.",
        "How do you handle difficult students?",
      ],
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
        "ai",
      ],

      questions: [
        "Describe a technical project you worked on.",
        "How do you solve coding problems?",
        "How do you explain technical concepts?",
      ],
    },

    administration: {
      keywords: [
        "admin",
        "assistant",
        "office",
        "data entry",
        "excel",
        "report",
      ],

      questions: [
        "How do you prioritize multiple tasks?",
        "Describe your organizational skills.",
        "How do you maintain accuracy?",
      ],
    },

    translation: {
      keywords: [
        "translation",
        "proofreading",
        "translator",
        "english",
        "german",
      ],

      questions: [
        "How do you maintain translation accuracy?",
        "Describe your proofreading workflow.",
        "How do you handle technical terminology?",
      ],
    },

    customer_service: {
      keywords: [
        "customer service",
        "support",
        "call center",
        "client",
        "complaint",
        "service desk",
        "customer care",
      ],

      questions: [
        "How do you handle difficult customers?",
        "Describe a time you solved a customer issue.",
        "How do you stay calm under pressure?",
        "What does excellent customer service mean to you?",
        "How do you manage multiple customer requests?",
        "Describe a situation where you exceeded customer expectations.",
      ],
    },

    sales_marketing: {
      keywords: [
        "sales",
        "marketing",
        "promotion",
        "digital marketing",
        "branding",
        "advertising",
        "lead generation",
        "social media",
      ],

      questions: [
        "How do you approach new clients?",
        "Describe a successful campaign you worked on.",
        "How do you handle rejection in sales?",
        "What strategies do you use to increase engagement?",
        "How do you measure marketing success?",
        "Describe your communication style with customers.",
      ],
    },

    finance_accounting: {
      keywords: [
        "finance",
        "accounting",
        "bookkeeping",
        "tax",
        "invoice",
        "budget",
        "payroll",
        "financial",
      ],

      questions: [
        "How do you maintain financial accuracy?",
        "Describe your experience handling budgets.",
        "How do you prioritize financial deadlines?",
        "What accounting software are you familiar with?",
        "How do you identify financial discrepancies?",
        "Describe a financial report you prepared.",
      ],
    },

    design_creative: {
      keywords: [
        "design",
        "graphic",
        "ui",
        "ux",
        "photoshop",
        "illustrator",
        "creative",
        "branding",
      ],

      questions: [
        "Describe your design process.",
        "How do you handle client feedback?",
        "What inspires your creative work?",
        "Describe a challenging creative project.",
        "How do you balance creativity with deadlines?",
        "What design tools are you most comfortable using?",
      ],
    },

    human_resources: {
      keywords: [
        "human resources",
        "hr",
        "recruitment",
        "talent",
        "hiring",
        "employee",
        "onboarding",
        "recruiter",
      ],

      questions: [
        "How do you handle workplace conflict?",
        "Describe your recruitment process experience.",
        "How do you evaluate candidates effectively?",
        "What strategies improve employee engagement?",
        "How do you maintain confidentiality in HR work?",
        "Describe a successful hiring experience.",
      ],
    },

    project_management: {
      keywords: [
        "project manager",
        "project management",
        "planning",
        "scrum",
        "agile",
        "deadline",
        "coordination",
        "stakeholder",
      ],

      questions: [
        "How do you manage project deadlines?",
        "Describe a challenging project you handled.",
        "How do you prioritize competing tasks?",
        "What project management tools have you used?",
        "How do you communicate with stakeholders?",
        "Describe your leadership approach in projects.",
      ],
    },

    engineering: {
      keywords: [
        "engineer",
        "mechanical",
        "electrical",
        "civil",
        "technical drawing",
        "autocad",
        "manufacturing",
        "engineering",
      ],

      questions: [
        "Describe a technical problem you solved.",
        "How do you ensure engineering accuracy?",
        "What engineering software are you familiar with?",
        "Describe a challenging engineering project.",
        "How do you manage safety standards?",
        "How do you approach troubleshooting?",
      ],
    },

    media_content: {
      keywords: [
        "content",
        "writer",
        "copywriting",
        "video editing",
        "youtube",
        "social media",
        "editing",
        "media",
      ],

      questions: [
        "Describe your content creation process.",
        "How do you adapt content for different audiences?",
        "What tools do you use for media production?",
        "How do you manage content deadlines?",
        "Describe a successful content project.",
        "How do you measure audience engagement?",
      ],
    },
  };

  // Category Detection
  for (const category in jobCategories) {
    const keywords = jobCategories[category].keywords;

    const matched = keywords.some((keyword) => vacancy.includes(keyword));

    if (matched) {
      questions.push(...jobCategories[category].questions);

      detectedCategories.push(
        category
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      );
    }
  }

  // Default Fallback
  if (detectedCategories.length === 0) {
    detectedCategories.push("General");
  }

  if (questions.length === 0) {
    questions = [
      "Tell me about yourself.",
      "Why are you interested in this role?",
      "What are your strengths and weaknesses?",
      "Describe a challenge you overcame.",
      "How do you handle pressure at work?",
      "What motivates you professionally?",
      "Describe your ideal work environment.",
      "How do you handle teamwork situations?",
      "What achievement are you most proud of?",
      "Where do you see yourself in the future?",
    ];
  }

  // Duplicate Filtering
  const uniqueQuestions = [...new Set(questions)];

  const questionAmount = Number(document.getElementById("questionCount").value);

  // Randomized Question Selection
  const randomizedQuestions = getRandomQuestions(
    uniqueQuestions,
    questionAmount,
  );

  // Output Rendering
  let output = `
  <h2>Mock Interview Questions</h2>

  <p>
    <strong>Detected Category:</strong>
    ${detectedCategories.join(", ")}
  </p>

  <ul>
`;

  randomizedQuestions.forEach((question, index) => {
    output += `
    <li>
      <strong>Question ${index + 1}:</strong>
      ${question}
    </li>
  `;
  });

  output += `</ul>`;

  // DOM Rendering
  const questionBox = document.getElementById("questions");
  const regenerateButton = document.getElementById("regenerateButton");
  questionBox.innerHTML = output;
  const generateButton = document.getElementById("generateButton");
  questionBox.style.display = "block";
  regenerateButton.style.display = "block";
  generateButton.style.display = "none";
}
