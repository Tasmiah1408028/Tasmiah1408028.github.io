/* =============================================================
   Portfolio content — edit this file to update the website.
   All sections are rendered dynamically from the data below.
   ============================================================= */

const PORTFOLIO = {
  profile: {
    name: "Tasmiah Haque",
    title: "AI / ML Researcher · Ph.D. Candidate",
    tagline:
      "Building real-time intelligent systems at the intersection of video analytics, probabilistic modeling, and edge deployment.",
    location: "Morgantown, WV, USA",
    photo: "assets/profile.jpg",
    resumeProfessional: "assets/Tasmiah_Haque_Professional_Resume.pdf",
    resumeAcademic: "assets/Tasmiah_Haque_Academic_CV.pdf",
    email: "th00027@mix.wvu.edu",
    altEmail: "imran.wvu@gmail.com",
    phone: "(681) 285-4175",
    linkedin: "https://www.linkedin.com/in/tasmiahaque",
    scholar: "https://scholar.google.com/",
  },

  // Small headline metrics for the hero band
  stats: [
    { value: "3+", label: "Years of research" },
    { value: "5", label: "Publications & preprints" },
    { value: "2×", label: "Bandwidth reduction achieved" },
    { value: "95%", label: "Vessel-tracking accuracy" },
  ],

  about: {
    summary:
      "AI/ML researcher with 3+ years of experience building real-time intelligent systems at the intersection of video analytics, probabilistic modeling, and edge deployment. Ph.D. candidate (expected Nov 2026) specializing in generative time-series models, motion keypoint prediction, and bandwidth-efficient inference pipelines. Published author with peer-reviewed works and a proven track record across both academic research and industrial settings.",
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
      venue: "MTAP 2026",
      period: "2026",
      description:
        "Conducted a systematic accuracy–diversity tradeoff analysis using VRNN and GRU-NF models (PyTorch, PyTorchTS) for keypoint-based video conferencing, remote patient monitoring, and manufacturing anomaly detection.",
      tags: ["PyTorch", "Time-Series", "Benchmarking"],
    },
    {
      title: "Real-Time Remote Fall Prediction via Motion Keypoints",
      venue: "Manuscript in preparation",
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
      type: "Journal",
      authors:
        "Haque, T., Syed, M.A.B., Jeong, B., Bai, X., Mohan, S., Paul, S., Ahmed, I., and Das, S.",
      year: "2026",
      title:
        "Towards efficient real-time video motion transfer via generative time series modeling.",
      venue: "Multimedia Tools and Applications, 85(2), p. 51.",
    },
    {
      type: "Journal",
      authors: "Haque, T., Syed, M.A.B., Das, S., and Ahmed, I.",
      year: "2024",
      title:
        "Advancing marine surveillance: A hybrid approach of physics-infused neural network for enhanced vessel tracking using automatic identification system data.",
      venue: "Journal of Marine Science and Engineering, 12(11), p. 1913.",
    },
    {
      type: "Conference",
      authors: "Haque, T. and Das, S.",
      year: "2025",
      title:
        "Inference-time stochastic refinement of GRU-Normalizing Flow for real-time video motion transfer.",
      venue:
        "59th Asilomar Conference on Signals, Systems, and Computers, Pacific Grove, CA, pp. 1313–1318.",
    },
    {
      type: "Conference",
      authors: "Bai, X., Haque, T., Mohan, S., Cai, Y., Jeong, B., Halasz, A., and Das, S.",
      year: "2024",
      title:
        "Enhancing bandwidth efficiency for video motion transfer applications using deep learning based keypoint prediction.",
      venue:
        "Int. Conference on Engineering Applications of Neural Networks (EANN), Springer, pp. 134–151.",
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
        "Developed a VRNN keypoint-prediction framework for real-time video motion transfer, enabling future-frame generation with up to 2× bandwidth reduction.",
        "Designed inference-time stochastic refinement for a GRU–Normalizing Flow model using MCMC, improving the diversity–fidelity tradeoff without retraining.",
        "Built and benchmarked generative time-series models (VRNN, GRU-NF) in PyTorch/PyTorchTS for accuracy–diversity analysis.",
        "Designed a remote fall-prediction pipeline integrating motion keypoints, future motion prediction, and anomaly classification for healthcare monitoring.",
      ],
    },
    {
      role: "Graduate Teaching Assistant & Researcher",
      org: "West Virginia University, Morgantown, WV",
      period: "Aug 2021 – May 2023",
      type: "Research / Teaching",
      points: [
        "Developed a physics-infused LSTM for marine vessel track association using AIS data, achieving 95% prediction accuracy (published in JMSE).",
        "Delivered R programming tutorials for Advanced Analysis of Engineering Data, covering statistical methods, visualization, and data interpretation.",
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

  teaching: [
    {
      role: "Undergraduate Research Mentor",
      org: "School of Mathematical and Data Sciences, WVU",
      period: "May 2025 – Present",
      detail:
        "Mentoring a B.S. Computer Science student on an unsupervised keypoint-based fall detection system, guiding them through literature review, experimental design, PyTorch implementation, and academic writing as a named co-author.",
    },
    {
      role: "Graduate Teaching Assistant — Deep Generative Models & Scalable Computing",
      org: "School of Mathematical and Data Sciences, WVU",
      period: "Jan 2026 – May 2026",
      detail:
        "Created PyTorch Jupyter notebooks supporting instruction on linear neural networks, recurrent neural networks, and attention mechanisms.",
    },
    {
      role: "Graduate Teaching Assistant — Advanced Analysis of Engineering Data",
      org: "Dept. of Industrial & Management Systems Engineering, WVU",
      period: "Aug 2021 – May 2023",
      detail:
        "Designed and delivered weekly R lab sessions on exploratory data analysis, regression modeling, hypothesis testing, and statistical process control.",
    },
  ],

  education: [
    {
      degree: "Ph.D. in Industrial Engineering",
      school: "West Virginia University, Morgantown, WV",
      period: "Aug 2023 – Nov 2026 (Expected)",
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
        "Video motion transfer",
        "Real-time video synthesis",
        "Bandwidth-efficient AI pipelines",
      ],
    },
    {
      group: "Frameworks & Languages",
      items: ["Python", "PyTorch", "PyTorchTS", "TensorFlow", "R", "MATLAB", "C"],
    },
    {
      group: "Infrastructure & HPC",
      items: ["NVIDIA RTX / A10 / A100 GPU", "Linux", "Windows", "LaTeX"],
    },
    {
      group: "Industrial & Operations",
      items: ["SAP", "CPLEX", "Arena", "Minitab", "AutoCAD", "SolidWorks"],
    },
  ],

  awards: [
    { title: "Six Sigma Green Belt Certificate", org: "Institute of Industrial & Systems Engineering", year: "2023" },
    { title: "Supply Chain Director's Award", org: "Unilever Bangladesh Ltd.", year: "2020" },
  ],
};
