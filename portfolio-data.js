// All copy + content for the portfolio — kept separate from layout so it's easy to edit.
window.PORTFOLIO_DATA = {
  name: "Anas AlGhannam",
  roles: ["AI/ML Engineer", "Research Assistant", "Front-End Developer"],
  location: "Doha, Qatar",
  status: {
    label: "Available for research collaboration",
    detail: "Qatar University · Jan 2026 – Present"
  },
  tagline: {
    pre: "Building",
    accent: "production-grade",
    post: "AI systems — from reinforcement-learning agents and computer-vision pipelines to multilingual web platforms that ship."
  },
  summary: "Computer engineer translating dense ML research into systems people actually use. Currently researching applications of AI/ML in Health Professions Education at Qatar University, building real-time GenAI-powered tools for clinical training simulations.",
  metrics: [
    { value: "92%", label: "Decision-accuracy in SAC-based RL simulations" },
    { value: "45%", label: "Bundle-size reduction on shipped corporate platform" },
    { value: "99.2%", label: "Edge-node uptime across distributed IoT deployments" },
    { value: "3", label: "Languages served — EN · AR · ZH multilingual stack" }
  ],
  projects: [
    {
      id: "ipe",
      tag: "Active research tool",
      year: "2025 — Present",
      title: "IPE Session Assistant",
      summary: "Cross-platform desktop assistant for live AI facilitation during Interprofessional Education sessions at Qatar University.",
      stack: ["Electron", "React", "TypeScript", "Vite", "Tailwind", "Anthropic API", "Gemini API", "Whisper ASR", "pyannote", "Socket.IO"],
      highlights: [
        "Dual-model orchestration — Anthropic Claude for case-study RAG and topic-aware question injection, Gemini for cross-checking and summarisation.",
        "Real-time audio pipeline: PCM streaming through Whisper ASR, VAD-aware chunking, and speaker diarization via pyannote.",
        "Host controls for live pilots — pause/resume, multi-speaker session management, and Socket.IO sync across instructor + observer terminals."
      ],
      role: "Sole engineer · research lead"
    },
    {
      id: "ml-cv",
      tag: "ML + computer vision",
      year: "2025 — 2026",
      title: "Classification & Vision Suite",
      summary: "A working notebook collection covering tabular ML, transfer-learning image classification, and multimodal captioning.",
      stack: ["Python", "Scikit-learn", "PyTorch", "VGG16", "BLIP", "Jupyter"],
      highlights: [
        "Australian rain-prediction model — Logistic Regression + Random Forest with GridSearchCV across a 10-year meteorological dataset.",
        "Aircraft damage classifier — VGG16 transfer learning for binary dent-vs-crack detection with training/validation diagnostic curves.",
        "BLIP transformer wired in for automated captioning and natural-language summaries of damage reports."
      ],
      role: "Independent · open source"
    },
    {
      id: "drl",
      tag: "Reinforcement learning",
      year: "2023 — 2025",
      title: "Deep RL for Multi-Joint Control",
      summary: "Autonomous decision-making agents for clinical-resource allocation, built on tabular Q-Learning and Soft Actor-Critic.",
      stack: ["Python", "TensorFlow", "OpenAI Gym", "SAC", "Q-Learning"],
      highlights: [
        "92% success rate in autonomous decision simulations; modeled potential 35% reduction in resource-allocation error.",
        "Entropy-regularised reward shaping for multi-objective healthcare scenarios — patient-priority, equipment availability, staff load.",
        "Off-policy SAC with replay-buffer engineering tuned for sparse, delayed clinical rewards."
      ],
      role: "Research initiative"
    },
    {
      id: "roypow",
      tag: "Shipped product",
      year: "2025",
      title: "RoyPow Corporate Platform",
      summary: "Full production web platform for an enterprise battery company — primary digital presence across three language regions.",
      stack: ["React", "TypeScript", "Vite", "Tailwind", "react-i18next"],
      highlights: [
        "Architected and deployed end-to-end as marketing technologist — design through deployment.",
        "Multilingual via react-i18next across English, Arabic, and Chinese — including RTL layout discipline.",
        "Code splitting + lazy loading cut bundle size 45%; integrated real-time dashboards for B-Sola product metrics."
      ],
      role: "Marketing Technologist · RoyPow"
    },
    {
      id: "ethics",
      tag: "Research synthesis",
      year: "2024 — 2025",
      title: "AI Prompt Ethics Study",
      summary: "Literature review on ethical considerations in prompt engineering and LLM interactions, with focus on healthcare deployment.",
      stack: ["Academic Writing", "Literature Review", "Peer Review"],
      highlights: [
        "Peer-reviewed five+ articles examining bias, fairness, transparency, and accountability in AI-generated responses.",
        "Synthesised an ethical framework for prompt-engineering in clinical and educational deployment.",
        "Outputs feeding directly into current IPE Session Assistant guardrails."
      ],
      role: "Independent research"
    }
  ],
  experience: [
    {
      role: "Research Assistant",
      org: "Qatar University",
      type: "Full-time",
      period: "Jan 2026 — Present",
      bullets: [
        "Researching AI/ML applications in Health Professions Education (HPE); contributing to publications and grant initiatives.",
        "Collaborating with faculty on experimental design, data collection, and statistical analysis.",
        "Implementing ML models for active research projects in Python, TensorFlow, and PyTorch."
      ]
    },
    {
      role: "Marketing Technologist",
      org: "RoyPow",
      type: "Full-time",
      period: "Jun 2025 — Dec 2025",
      bullets: [
        "Architected and deployed the company's primary corporate web platform end-to-end.",
        "Multilingual support across EN/AR/ZH; 45% bundle-size reduction via code-splitting and lazy loading.",
        "Integrated third-party APIs and real-time dashboards for B-Sola battery product metrics."
      ]
    },
    {
      role: "Building Supervisor",
      org: "Qatar University",
      type: "Part-time",
      period: "Feb 2024 — Mar 2025",
      bullets: [
        "Coordinated with IT on network protocols; integrated improvements reducing system inefficiencies 40%.",
        "Maintained IoT building-automation systems at 98.5% operational uptime.",
        "Conducted 12+ technical audits ensuring data-management and operational compliance."
      ]
    },
    {
      role: "Embedded Systems & IoT Engineer",
      org: "Independent / Academic",
      type: "Project-based",
      period: "2020 — 2022",
      bullets: [
        "Designed IoT systems on Arduino, ESP32, and Raspberry Pi with 15+ integrated sensor modalities.",
        "Wi-Fi / Bluetooth 5.0 / MQTT pipelines hitting 99.2% uptime across distributed edge nodes.",
        "End-to-end edge-to-cloud architectures with HIPAA-compatible data handling."
      ]
    }
  ],
  education: {
    degree: "B.Sc. Computer Engineering",
    school: "Qatar University",
    period: "Spring 2025",
    gpa: "3.0"
  },
  skills: {
    "AI / ML": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI Gym", "BLIP", "Whisper ASR", "Pandas"],
    "Languages": ["Python", "TypeScript", "JavaScript", "Java", "C / C++", "PHP", "Bash"],
    "Web / Product": ["React", "Electron", "Vite", "Tailwind", "react-i18next", "Socket.IO"],
    "IoT / Embedded": ["Arduino", "ESP32", "Raspberry Pi", "MQTT", "Firmware"],
    "Research": ["Literature Review", "Experimental Design", "Statistical Analysis", "Academic Writing", "Research Ethics"]
  },
  certifications: [
    { title: "IBM AI Engineering Professional", note: "TensorFlow · Keras · PyTorch · CV · NLP · DL" },
    { title: "Google AI Professional Certificate", note: "7-track program — Apr 2026" },
    { title: "Huawei HCIA-AI V4.0", note: "AI · ML · DL frameworks — Apr 2026" },
    { title: "IBM Deep Learning with Keras & TensorFlow", note: "Model optimisation · TF pipelines — Apr 2026" },
    { title: "IBM Machine Learning with Python", note: "Supervised / unsupervised / clustering — Apr 2026" },
    { title: "IBM Neural Networks & PyTorch", note: "Network construction + training — Apr 2026" },
    { title: "IBM Deep Learning & Neural Networks with Keras", note: "Fundamentals · architecture — Apr 2026" },
    { title: "CITI Program — SBE Comprehensive", note: "Social & Behavioral Research Ethics — 2026" }
  ],
  contact: {
    email: "anas.alghannam00@gmail.com",
    phone: "+974 5025 1058",
    github: "AnasAlghannam",
    githubUrl: "https://github.com/AnasAlghannam",
    linkedin: "Anas AlGhannam",
    location: "Doha, Qatar"
  }
};
