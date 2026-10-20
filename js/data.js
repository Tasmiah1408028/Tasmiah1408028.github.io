/* =============================================================
   Portfolio content — edit this file to update the website.
   All sections are rendered dynamically from the data below.
   ============================================================= */

const PORTFOLIO = {
  profile: {
    name: "Tasmiah Haque",
    title: "AI / ML Researcher · Ph.D. Candidate",
    tagline:
      "Building real-time intelligent systems at the intersection of video analytics, probabilistic modeling, and anomaly detection.",
    location: "Morgantown, WV, USA",
    photo: "assets/profile.jpg",
    resumeProfessional: "assets/Tasmiah_Haque_Professional_Resume.pdf",
    resumeAcademic: "assets/Tasmiah_Haque_Professional_Resume.pdf",
    email: "th00027@mix.wvu.edu",
    altEmail: "tasmiah1408028@gmail.com",
    phone: "(681) 285-4175",
    linkedin: "https://www.linkedin.com/in/tasmiahaque",
    scholar: "https://scholar.google.com/citations?user=qeKJXmAAAAAJ",
  },

  // Small headline metrics for the hero band
  stats: [
    { value: "5+", label: "Years of research in Generative AI" },
    { value: "1+", label: "Years of Industrial Experience" },
    { value: "13", label: "Publications & preprints (· Supply Chain · Generative AI " },
    { value: "2", label: "Honors & Awards" },
  ],

  about: {
    summary:
      "AI/ML researcher with 3+ years of experience building real-time intelligent systems at the intersection of video analytics, probabilistic modeling, and anomaly detection. Ph.D. candidate (expected April 2027) specializing in generative time-series models, motion keypoint prediction, and bandwidth-efficient inference pipelines. Published author with peer-reviewed works including a NeurIPS 2026 WiML workshop paper on real-time fall detection and a proven track record across both academic research and industrial settings.",
    interests:
      "Generative time-series modeling for real-time AI systems under deployment constraints, with a focus on inference-time refinement and applications in bandwidth-efficient video motion synthesis, remote patient monitoring, and smart manufacturing.",
    highlights: [
      "Generative time-series & sequence forecasting",
      "Motion keypoint prediction & video motion transfer",
      "Bandwidth-efficient, edge-ready inference pipelines",
      "Probabilistic modeling (VAE, Normalizing Flows, MCMC)",
    ],
  },

  research: [
    {
      title: "Bandwidth-Efficient Video Motion Transfer via Keypoint Prediction",
      venue: "EANN 2024",
      period: "Aug 2023 – Present",
      description:
        "Designed a Variational Recurrent Neural Network (VRNN)-based keypoint prediction framework integrated with the First Order Motion Model (FOMM), enabling efficient video frame synthesis with up to 2× additional bandwidth reduction. Applicable to video conferencing, VR gaming, remote medical monitoring, and manufacturing anomaly detection.",
      tags: ["VRNN", "FOMM", "Video Synthesis"],
    },
    {
      title: "Inference-Time Stochastic Refinement of GRU-Normalizing Flow",
      venue: "Asilomar 2025",
      period: "2025",
      description:
        "Developed a training-free MCMC-based stochastic refinement strategy for GRU-Normalizing Flow (GRU-NF) models, improving the diversity–fidelity tradeoff in generative video synthesis without retraining; integrated into a real-time, bandwidth-efficient motion transfer pipeline.",
      tags: ["GRU-NF", "MCMC", "Real-time"],
    },
    {
      title: "Generative Time-Series Modeling for Real-Time Video Synthesis",
      venue: "MTAP 2026 · INFORMS 2026",
      period: "2026",
      description:
        "Conducted a systematic accuracy–diversity tradeoff analysis using VRNN and GRU-NF models (PyTorch, PyTorchTS) for keypoint-based video conferencing, remote patient monitoring, and manufacturing anomaly detection.",
      tags: ["PyTorch", "Time-Series", "Benchmarking"],
    },
    {
      title: "Unsupervised keypoints for real-time fall detection: Comparative analysis under real-world conditions with predictive bandwidth reduction",
      venue: "Under review at Scientific Reports · WiML @ NeurIPS 2026",
      period: "May 2025 – Present",
      description:
        "Extending the unsupervised keypoint motion framework to extract and forecast patient activity patterns in real time for fall detection, anomaly classification, and communication-overhead reduction in remote health monitoring. Mentoring an undergraduate co-author through the full research cycle.",
      tags: ["Healthcare AI", "Fall Detection", "Mentoring"],
    },
    {
      title: "Physics-Infused LSTM for Marine Vessel Tracking",
      venue: "JMSE 2024 · IISE 2023",
      period: "Aug 2021 – May 2023",
      description:
        "Developed a hybrid algorithm combining physics-based motion models with LSTM for AIS-based vessel track association using TensorFlow, achieving 95% average prediction accuracy.",
      tags: ["LSTM", "TensorFlow", "AIS Data"],
    },
  ],

  publications: [
    {
      type: "Workshop",
      authors: "Haque, T., Kosinski, J., Al-Mamun, M.A., and Das, S.",
      year: "2026",
      title:
        "Unsupervised keypoints for real-time fall detection: Comparative analysis under real-world conditions with predictive bandwidth reduction.",
      venue:
        "Women in Machine Learning (WiML) Workshop, NeurIPS 2026 (accepted, poster); under review at Scientific Reports. arXiv:2607.15400.",
    },
    {
      type: "Journal",
      authors:
        "Haque, T., Syed, M.A.B., Jeong, B., Bai, X., Mohan, S., Paul, S., Ahmed, I., and Das, S.",
      year: "2026",
      title:
        "Towards efficient real-time video motion transfer via generative time series modeling.",
      venue:
        "Multimedia Tools and Applications, 85(2), p. 51. Oral presentation, INFORMS Annual Meeting 2026.",
    },
    {
      type: "Journal",
      authors: "Haque, T., Syed, M.A.B., Das, S., and Ahmed, I.",
      year: "2024",
      title:
        "Advancing marine surveillance: A hybrid approach of physics-infused neural network for enhanced vessel tracking using AIS data.",
      venue:
        "Journal of Marine Science and Engineering, 12(11), p. 1913. Oral presentation, IISE Annual Conference 2023.",
    },
    {
      type: "Conference",
      authors: "Haque, T. and Das, S.",
      year: "2025",
      title:
        "Inference-time stochastic refinement of GRU-Normalizing Flow for real-time video motion transfer.",
      venue:
        "59th Asilomar Conference on Signals, Systems, and Computers, pp. 1313–1318 (poster).",
    },
    {
      type: "Conference",
      authors: "Bai, X., Haque, T., Mohan, S., Cai, Y., Jeong, B., Halasz, A., and Das, S.",
      year: "2024",
      title:
        "Enhancing bandwidth efficiency for video motion transfer applications using deep learning based keypoint prediction.",
      venue: "EANN 2024, Springer, pp. 134–151.",
    },
    {
      type: "Preprint",
      authors: "Rahaman, M.M., Chang, E., Haque, T., and Das, S.",
      year: "2025",
      title:
        "Post-training quantization of generative and discriminative LSTM text classifiers: A study of calibration, class balance, and robustness.",
      venue: "arXiv preprint arXiv:2507.09687.",
    },
  ],

  experience: [
    {
      role: "Graduate Research Assistant — Data Science",
      org: "School of Mathematical and Data Sciences, West Virginia University",
      period: "Aug 2023 – Present",
      type: "Research",
      points: [
        "Developed a VRNN keypoint-prediction framework integrated with the First Order Motion Model for real-time video motion transfer, enabling future-frame generation with up to 2× additional bandwidth reduction for video conferencing, VR, and remote monitoring.",
        "Designed training-free inference-time stochastic refinement for a GRU–Normalizing Flow model using MCMC, improving the diversity–fidelity tradeoff in generated video motion without retraining the base model.",
        "Built and benchmarked generative time-series models (VRNN, GRU-NF) in PyTorch/PyTorchTS for accuracy–diversity analysis across video synthesis and industrial anomaly detection tasks.",
        "Designed a privacy-preserving real-time fall-detection pipeline integrating unsupervised motion keypoints, future motion prediction, predictive bandwidth reduction, and anomaly classification for healthcare monitoring; benchmarked against supervised pose under real-world conditions (accepted at WiML @ NeurIPS 2026).",
        "Extending the fall-detection framework to multimodal sensing, fusing video motion keypoints with wearable IMU signals for more robust fall detection (ongoing).",
        "Mentored four undergraduate researchers (Aug 2024 – present) through literature review, experimental design, PyTorch implementation, and writing; one student is a co-author on the fall-detection paper.",
      ],
    },
    {
      role: "Graduate Researcher & Teaching Assistant",
      org: "Dept. of Industrial and Management Systems Engineering, West Virginia University",
      period: "Aug 2021 – May 2023",
      type: "Research / Teaching",
      points: [
        "Developed a physics-infused LSTM for marine vessel track association using AIS data in TensorFlow, achieving 95% average prediction accuracy.",
        "Designed and delivered weekly R labs for Advanced Analysis of Engineering Data (undergraduate course), covering regression, hypothesis testing, and statistical process control.",
      ],
    },
    {
      role: "Graduate Engineering Trainee — Inbound Logistics",
      org: "Unilever Bangladesh Ltd., Chittagong, Bangladesh",
      period: "Dec 2019 – Mar 2021",
      type: "Industry",
      points: [
        "Managed inventory operations across 400+ SKUs, maintaining safety, quality, and production-readiness in a high-volume manufacturing environment.",
        "Optimized real-time stock levels in SAP to align packaging-material availability with production plans.",
        "Led a relabeling initiative recovering $6,000 in packaging materials, meeting On-Time-In-Full delivery targets.",
      ],
    },
  ],

  // Each entry can have a short `detail` paragraph and/or a `points` list.
  teaching: [
    {
      role: "Undergraduate Research Mentor",
      org: "School of Mathematical and Data Sciences, WVU",
      period: "Aug 2024 – Present",
      points: [
        "Mentored an undergraduate student (Grady King, Data Science) in deep learning and sequential data analysis to build foundational research competency.",
        "Mentored Jacob Kosinski (B.S. Computer Science) through deep learning architectures, time-series concepts, keypoint extraction, and experimental design; he presented the work as his senior capstone and is a named co-author on the fall-detection preprint.",
        "Onboarding two additional mentees (Reese Allen, Mechanical Engineering & Data Science; Chase Muir, Chemistry & Data Science) whose capstone projects will extend my doctoral research in new directions.",
      ],
    },
    {
      role: "Graduate Teaching Assistant — Introduction to Data Science, Special Topics: Data Visualization and Wrangling with R",
      org: "School of Mathematical and Data Sciences, WVU",
      period: "Aug 2024 – Dec 2025",
      detail:
        "Proctored course examinations and evaluated individual assignments through Blackboard (eCampus).",
    },
    {
      role: "Graduate Teaching Assistant — Statistical Machine Learning",
      org: "School of Mathematical and Data Sciences, WVU",
      period: "Aug 2026 – Dec 2026",
      detail:
        "Provide instructional support on fundamental machine learning concepts and methods, helping students strengthen their conceptual understanding and apply statistical learning techniques to practical problems",
    },
    {
      role: "Graduate Teaching Assistant",
      org: "Dept. of Industrial & Management Systems Engineering, WVU",
      period: "Aug 2021 – May 2023",
      points: [
        "<strong>Advanced Analysis of Engineering Data:</strong> produced a series of R/RStudio tutorial videos with step-by-step walkthroughs on exploratory data analysis, regression modeling, hypothesis testing, and statistical process control, shared with all enrolled students as a self-study resource; held weekly office hours and gave individualized written feedback on analyses and lab reports.",
        "<strong>Computer Applications in Industrial Engineering:</strong> held weekly office hours on programming and computational methods; graded assignments and projects with detailed feedback.",
        "<strong>Simulation of Digital Methods:</strong> supported students with discrete-event simulation concepts and software-based modeling; graded assignments.",
        "<strong>Team Facilitation:</strong> assisted students with collaborative project planning and professional deliverables; graded assignments and team submissions.",
      ],
    },
  ],

  service: [
    { title: "Judge, WVU Undergraduate Research Symposium", org: "West Virginia University", year: "2026" },
    {
      title: "Committee Member (Program Coordinator)",
      org: "Bangladeshi Students Association, West Virginia University",
      year: "2023–24",
    },
  ],

  education: [
    {
      degree: "Ph.D. in Industrial Engineering",
      school: "West Virginia University, Morgantown, WV",
      period: "Aug 2023 – April 2027 (Expected)",
      note: "Dissertation: Generative Sequence Forecasting for Real-time Decision Systems Under Deployment Constraints",
    },
    {
      degree: "M.S. in Industrial Engineering",
      school: "West Virginia University, Morgantown, WV",
      period: "Aug 2021 – May 2023",
      note: "Thesis: A Hybrid Physics-Infused LSTM for Marine Vessel Tracking via AIS Data",
    },
    {
      degree: "B.Sc. in Industrial & Production Engineering",
      school: "Bangladesh University of Engineering and Technology (BUET), Dhaka",
      period: "Feb 2015 – Apr 2019",
      note: "",
    },
  ],

  skills: [
    {
      group: "Machine Learning",
      items: [
        "Time-series forecasting",
        "Probabilistic modeling",
        "Generative models (VAE, Normalizing Flows)",
        "MCMC",
        "Anomaly detection",
      ],
    },
    {
      group: "Computer Vision / Video AI",
      items: [
        "Motion keypoint prediction",
        "Keypoint-based video motion transfer",
        "Real-time video synthesis",
        "Bandwidth-efficient AI pipelines",
      ],
    },
    {
      group: "Frameworks & Languages",
      items: ["Python", "PyTorch", "PyTorchTS", "TensorFlow", "R", "MATLAB", "C"],
    },
    {
      group: "Infrastructure & MLOps",
      items: [
        "Kubernetes",
        "NVIDIA RTX / A10 / A100 GPU training & inference",
        "Linux",
        "Windows",
      ],
    },
    {
      group: "Industrial & Operations",
      items: ["SAP", "CPLEX", "Arena simulation", "Minitab", "AutoCAD", "SolidWorks"],
    },
  ],

  awards: [
    { title: "Six Sigma Green Belt Certificate", org: "Institute of Industrial & Systems Engineering", year: "2023" },
    { title: "Supply Chain Director's Award", org: "Unilever Bangladesh Ltd.", year: "2020" },
  ],
};
