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
    "AI / ML": ["TensorFlow", "Keras", "PyTorch", "Scikit-learn", "Hugging Face", "LangChain", "RAG", "LLMs", "Transformers", "Fine-tuning", "OpenAI Gym", "BLIP", "Whisper ASR", "Pandas"],
    "Languages": ["Python", "TypeScript", "JavaScript", "Java", "C / C++", "PHP", "Bash"],
    "Web / Product": ["React", "Electron", "Vite", "Tailwind", "react-i18next", "Socket.IO"],
    "IoT / Embedded": ["Arduino", "ESP32", "Raspberry Pi", "MQTT", "Firmware"],
    "Research": ["Literature Review", "Experimental Design", "Statistical Analysis", "Academic Writing", "Research Ethics"]
  },
  certifications: [
    {
      issuer: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      badges: [
        { title: "IBM AI Engineering Professional Certificate (V3)", date: "May 2026", img: "https://images.credly.com/images/fa4ad241-cbb4-4330-9327-32b9696919fe/Coursera_20AI_20Engineering_20Professional_20Certificate.png" },
        { title: "Advanced Deep Learning Specialist", date: "Apr 2026", img: "https://images.credly.com/images/3e91c6f6-1d05-4b40-9005-4344e35edaff/Coursera_20Advanced_20Deep_20Learning_20Specialist.png" },
        { title: "Generative AI Applications Specialist", date: "May 2026", img: "https://images.credly.com/images/cdb44549-e7b6-47e7-a21f-160cecf8f38f/Coursera_20Generative_20AI_20Applications_20Specialist.png" },
        { title: "AI Agents Using RAG and LangChain", date: "Apr 2026", img: "https://images.credly.com/images/bc1ee755-d8b5-4068-91fa-60a6e05f12dc/Coursera_20AI_20Agents_20Using_20RAG_20and_20LangChain.png" },
        { title: "Generative AI Advanced Fine-Tuning for LLMs", date: "Apr 2026", img: "https://images.credly.com/images/e61e6ff9-3502-4d64-b726-64f932ffbf02/Coursera_20Generative_20AI_20Advanced_20Fine_20Tuning_20for_20LLMs.png" },
        { title: "Generative AI Engineering with Transformers & LLMs", date: "Apr 2026", img: "https://images.credly.com/images/6387f397-234b-480c-a0a0-4f9d6f8654a8/blob" },
        { title: "Generative AI Language Modeling with Transformers", date: "Apr 2026", img: "https://images.credly.com/images/bc7582ae-95c6-4e92-a425-d355c65b7d10/image.png" },
        { title: "Generative AI Foundational Models for NLP & Language Understanding", date: "Apr 2026", img: "https://images.credly.com/images/954a697e-66c0-45c3-8681-ced968dfa73e/blob" },
        { title: "Generative AI and LLMs: Architecture and Data Preparation", date: "Apr 2026", img: "https://images.credly.com/images/a9f5d0ac-5ee8-47a6-a9df-09468f26e401/image.png" },
        { title: "Build RAG Applications: Get Started", date: "May 2026", img: "https://images.credly.com/images/5f826bbb-5028-4ed0-aa9b-f5d402f96a0b/Coursera_20Build_20RAG_20Applications_20Get_20Started.png" },
        { title: "Develop Generative AI Applications: Get Started", date: "May 2026", img: "https://images.credly.com/images/6dff9a88-0130-483b-861e-c6de13851780/Coursera_20Develop_20Gen_20AI_20Applications_20Get_20Started.png" },
        { title: "Generative AI: Prompt Engineering", date: "May 2026", img: "https://images.credly.com/images/7fd5a03e-823f-4449-af43-59afe528f4ee/image.png" },
        { title: "Generative AI Essentials", date: "May 2026", img: "https://images.credly.com/images/7658c4f1-0570-42c7-83b0-04cac8b0aca2/image.png" },
        { title: "Artificial Intelligence Essentials V2", date: "May 2026", img: "https://images.credly.com/images/3e199561-bc4a-4621-9361-340fc43d997e/Coursera_20Artificial_20Intelligence_20Essentials_20V2.png" },
        { title: "AI Capstone Project with Deep Learning", date: "Apr 2026", img: "https://images.credly.com/images/a182504c-d74d-4d7c-8059-7401184fadf7/AI_Engineering_Deep_Learning_Capstone.png" },
        { title: "Deep Learning with PyTorch", date: "Apr 2026", img: "https://images.credly.com/images/b480dfb3-5387-491d-a8db-0e01ad620b51/Coursera_20Deep_20Learning_20with_20PyTorch.png" },
        { title: "Introduction to Neural Networks with PyTorch", date: "Apr 2026", img: "https://images.credly.com/images/335a694d-1fc4-4c83-a467-f140862a0a1e/Coursera_20Introduction_20to_20Neural_20Networks_20with_20PyTorch.png" },
        { title: "Deep Learning Essentials with Keras", date: "Apr 2026", img: "https://images.credly.com/images/91de936a-1322-446d-9ea6-949d78c57428/image.png" },
        { title: "Machine Learning with Python (V2)", date: "Apr 2026", img: "https://images.credly.com/images/56c60565-e945-4bcd-b8a6-9b2f43e1b0d9/Coursera_20Machine_20Learning_20with_20Python_20V2.png" }
      ]
    },
    {
      issuer: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      badges: [
        { title: "Google AI Professional Certificate", date: "Apr 2026", img: "https://images.credly.com/images/5bd2d506-c95c-4766-a5b1-8da62a3a23b2/blob" },
        { title: "Google AI Fundamentals", date: "Apr 2026", img: "https://images.credly.com/images/ee3ee65e-f3a4-4dcf-8cf4-e5a19ba89fe5/blob" },
        { title: "Google AI for App Building", date: "Apr 2026", img: "https://images.credly.com/images/7e854d65-d59d-45ad-9d4d-89d627087c08/blob" },
        { title: "Google AI for Brainstorming and Planning", date: "Apr 2026", img: "https://images.credly.com/images/0b476bd4-bb81-4eaf-9464-8c54451fa7ee/blob" },
        { title: "Google AI for Content Creation", date: "Apr 2026", img: "https://images.credly.com/images/6ffa4f1e-cf24-4d4b-af84-86105720f6fe/blob" },
        { title: "Google AI for Data Analysis", date: "Apr 2026", img: "https://images.credly.com/images/34ac978e-748e-4e7e-9227-34e0746716c8/blob" },
        { title: "Google AI for Research and Insights", date: "Apr 2026", img: "https://images.credly.com/images/3460226a-69cf-47d2-91cf-7ce24fe0da59/blob" },
        { title: "Google AI for Writing and Communicating", date: "Apr 2026", img: "https://images.credly.com/images/3d5a1839-d1dc-4821-b58e-3a274b610f37/blob" }
      ]
    }
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
