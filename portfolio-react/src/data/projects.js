export const projects = [
    {
        id: 1, 
        title: 'Release',
        description: 'Social media platform designed to leverage social incentive as a means for reducing screen time. ',
        tags: ['Full stack', 'IOS'],
        image: "/projects/Cover.svg",
        link: "https://testflight.apple.com/join/9gccQrFr",
        linkLabel: 'External Beta (TestFlight)'
    },
  {

    id: 2,
    title: 'Cribs 2024',
    description:
      'Mobile app designed to improve landlord-tenant interaction and housing transparency. Built in 12 hours at HackCamp, awarded "Most Likely to Be a Startup."',
    award: 'Most Likely to Be a Startup — HackCamp Fall 2024',
    tags: ['Python', 'UX/UI', 'Figma'],
    image: '/projects/hnkmo1v014uclowljys2.avif',
    link: 'https://devpost.com/software/cribs',
    linkLabel: 'View on Devpost',
  },
  {
    id: 3,
    title: 'Crash Tested',
    description:
      'ML model predicting economic recession likelihood in Metro Vancouver, trained on 20 years of business registration data using a random forest classifier.',
    award: '2nd Place — UBC Datathon Fall 2025',
    tags: ['Python', 'Pandas', 'Scikit-Learn'],
    image: '/projects/crash_tested.svg',
    imagePosition: 'top',
    link: 'https://github.com/fisher-mw/dsci-hackathon-2025/tree/main',
    linkLabel: 'View on GitHub',
  },
  {
    id: 4,
    title: 'Anderson-Darling Analysis',
    description:
      'Statistical software for CSV parsing, normality testing, and quantile/probability computation — with full JSON state management and unit test coverage.',
    award: null,
    tags: ['Java', 'Unit Testing', 'Statistics'],
    image: '/projects/AndersonDarling.webp',
    link: 'https://github.com/fisher-mw/Statistical-Inference-CPSC210/tree/main',
    linkLabel: 'View on GitHub',
  },

  {
    id: 5,
    title: 'eXAI: Credit Card Default Classifier',
    description:
      'Trained an ensemble model to predict if a client will default on their next payment. With the goal of explainability, the model metrics and per-prediction evaluation are made transparent using SHAP analysis.',
    award: null,
    tags: ['Python', 'Machine Learning', 'Full stack'],
    image: '/projects/default_classifier.png',
    imageScale: 1.4,
    link: 'https://github.com/fisher-mw/CPSC-330-Project',
    linkLabel: 'View on GitHub',
  },
  {
    id: 6,
    title: 'Minecraft Newsletter Model',
    description:
      'kNN classification model predicting newsletter subscription likelihood for players on the UBC Minecraft server, using API-sourced behavioral metrics.',
    award: null,
    tags: ['R', 'Machine Learning', 'Data Processing'],
    image: '/projects/minecraft.svg',
    imageScale: 1.4,
    link: 'https://github.com/fisher-mw/Minecraft-Newsletter-Analytics/tree/main',
    linkLabel: 'View on GitHub',
  },
]
