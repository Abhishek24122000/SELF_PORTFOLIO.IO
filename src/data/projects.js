export const categories = {
  DA: {
    label: "Data Analytics",
    intro:
      "Turning complex datasets into patterns, business insights and decisions.",
  },

  BI: {
    label: "Business Intelligence",
    intro:
      "Connecting KPIs, dashboards and analytical models to business action.",
  },

  ML: {
    label: "Machine Learning",
    intro:
      "Building predictive models around measurable business and real-world problems.",
  },

  AI: {
    label: "Artificial Intelligence",
    intro:
      "Building practical AI systems that combine data, models and usable interfaces.",
  },
};

export const projects = [
  // =========================================================
  // DATA ANALYTICS
  // =========================================================

  {
    id: "netflix",
    category: "DA",
    number: "01",
    title: "Netflix Customer Segmentation & Retention",
    subtitle: "Customer Analytics · Revenue · Churn",
    description:
      "Customer-level analytics on 2,500 Netflix users to understand subscription behaviour, revenue contribution, payment activity and retention risk.",

    bullets: [
      "Analysed 2,500 customers across demographics, subscription plans, geography, devices and payment behaviour to identify high-value customer segments.",
      "Defined churn using payment recency and quantified revenue exposure, identifying $31,271 in monthly revenue associated with churned customers.",
      "Built an end-to-end customer analytics workflow covering segmentation, revenue analysis, churn measurement and retention opportunities.",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "EDA",
      "Data Visualization",
    ],

    github: "Abhishek24122000/Netflix_Customer_segmentation_and_Retention_Analysis",
    demo: null,
    featured: true,
  },

  {
    id: "linkedin",
    category: "DA",
    number: "02",
    title: "LinkedIn Job Market & Salary Analytics",
    subtitle: "Workforce Analytics · Compensation · ML",
    description:
      "Large-scale job-market analysis combining hiring demand, skills, workforce segmentation and salary modelling.",

    bullets: [
      "Integrated 9 relational datasets covering 123,849 job postings across 24,474 companies to analyse hiring trends, industries, skills and benefits.",
      "Standardised hourly, daily, weekly, monthly and yearly compensation into comparable annual salaries and engineered workforce and job-market features.",
      "Built a LightGBM salary model using experience, work type, company size, industry, skill count and benefit count, achieving R² 0.4073 on the holdout set.",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "LightGBM",
      "Matplotlib",
      "Seaborn",
    ],

    github: "Abhishek24122000/LinkedIN_Job_Posting_Anlaysis",
    demo: null,
    featured: true,
  },

  {
    id: "finance-risk",
    category: "DA",
    number: "03",
    title: "Finance & Risk Analytics",
    subtitle: "Financial Analytics · Risk · Portfolio Strategy",
    description:
      "Investment analytics across 24 NYSE-listed stocks from 2010–2020 using market performance, risk-return behaviour and S&P 500 benchmarking.",

    bullets: [
      "Analysed 24 NYSE-listed stocks across multiple sectors using price movement, trading volume and market-performance indicators.",
      "Compared individual stock behaviour against the S&P 500 benchmark to identify trends, volatility and relative performance.",
      "Translated risk-return analysis into tailored portfolio recommendations aligned with different investor objectives.",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Financial Analytics",
    ],

    github: "Abhishek24122000/Finance-and-Risk-Analytics",
    demo: null,
    featured: false,
  },

  {
    id: "youtube",
    category: "DA",
    number: "04",
    title: "5,000 YouTube Channels Analysis",
    subtitle: "Creator Economy · Growth · Engagement",
    description:
      "Exploratory analysis of the top 5,000 YouTube channels to understand the characteristics associated with audience growth and engagement.",

    bullets: [
      "Cleaned and transformed channel-level data covering subscriber counts, video uploads and engagement metrics.",
      "Performed exploratory analysis and visualization to identify patterns associated with successful channels and audience growth.",
      "Converted raw creator-economy data into structured insights useful for content creators, marketers and researchers.",
    ],

    tech: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "EDA",
    ],

    github: "Abhishek24122000/5000_YouTube_Channels_Analysis",
    demo: null,
    featured: false,
  },

  {
    id: "uber",
    category: "DA",
    number: "05",
    title: "Uber Demand & Supply Analysis",
    subtitle: "Operations Analytics · Demand · Supply",
    description:
      "Operational analysis investigating ride cancellations and vehicle availability around airport demand.",

    bullets: [
      "Analysed ride demand, cancellations and vehicle availability to identify the operational drivers behind service gaps.",
      "Investigated demand patterns across time and trip conditions to isolate recurring supply-demand mismatches.",
      "Translated exploratory findings into business hypotheses and recommendations aimed at improving availability and revenue generation.",
    ],

    tech: [
      "Python",
      "Pandas",
      "EDA",
      "Data Visualization",
    ],

    github: "Abhishek24122000/Uber-Demand-and-Supply-Analysis",
    demo: null,
    featured: false,
  },

  {
    id: "udemy",
    category: "DA",
    number: "06",
    title: "Udemy Courses Analysis",
    subtitle: "Marketplace Analytics · Pricing · Engagement",
    description:
      "Marketplace analytics exploring course supply, pricing, subscriber behaviour and subject-level demand.",

    bullets: [
      "Analysed course offerings across subjects including Web Development, Business Finance, Graphic Design and Musical Instruments.",
      "Compared free versus paid courses, pricing patterns, subscriber counts and course-level popularity.",
      "Identified subject-level trends including 1,200 Web Development courses and 3,372 paid courses within the dataset.",
    ],

    tech: [
      "Python",
      "Pandas",
      "EDA",
      "Data Visualization",
    ],

    github: "Abhishek24122000/Udemy_Courses_Analysis",
    demo: null,
    featured: false,
  },

  // =========================================================
  // BUSINESS INTELLIGENCE
  // =========================================================

  {
    id: "business360",
    category: "BI",
    number: "01",
    title: "Business Insight 360",
    subtitle: "Executive BI · Sales · Profitability",
    description:
      "Interactive business intelligence dashboard designed to analyse sales, profitability, customers, products and geography through dynamic filters and KPIs.",

    bullets: [
      "Built an interactive Streamlit business dashboard with dynamic filtering across date, region, category, sub-category, state and city.",
      "Calculated core business KPIs including revenue, profit, profit margin, orders and units sold with interactive trend and profitability analysis.",
      "Designed the project around executive decision-making by connecting transactional data to sales, profitability, customer and geographic insights.",
    ],

    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "Power BI",
      "DAX",
    ],

    github: "Abhishek24122000/Business_insights_intreactive_webapp",

    demo: "businessinsightsintreactivewebapp.streamlit.app",

    featured: true,

    metrics: [
      "$823.85M Net Sales",
      "36.49% Gross Margin",
      "80.21% Forecast Accuracy",
    ],
  },

  // =========================================================
  // MACHINE LEARNING
  // =========================================================

  {
    id: "healthcare",
    category: "ML",
    number: "01",
    title: "Healthcare Premium Prediction",
    subtitle: "Predictive Analytics · Healthcare",
    description:
      "Machine-learning application for estimating healthcare insurance premiums from structured customer and health-related attributes.",

    bullets: [
      "Built a predictive modelling workflow to estimate healthcare insurance premiums from customer and health-related features.",
      "Applied data preprocessing and supervised-learning techniques to transform structured healthcare attributes into model-ready inputs.",
      "Deployed the prediction workflow as an interactive Streamlit application for practical, user-facing model inference.",
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Machine Learning",
      "Streamlit",
    ],

    github: "Abhishek24122000/Healthcare-Premium-Prediction",

    demo: "healthcare-premium-prediction-qz99hgtkn4hxdetrfsrpgv.streamlit.app",

    featured: true,
  },

  {
    id: "bike",
    category: "ML",
    number: "02",
    title: "Bike Sharing Demand",
    subtitle: "Demand Forecasting · Ensemble Learning",
    description:
      "Predictive modelling of bike rental demand using historical usage patterns and weather-related variables.",

    bullets: [
      "Combined historical rental behaviour with weather information to model demand for the Capital Bikeshare system.",
      "Performed exploratory analysis to understand temporal, seasonal and environmental factors influencing rental demand.",
      "Applied regression and ensemble modelling techniques to develop a data-driven demand prediction workflow.",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Regression",
      "Gradient Boosting",
    ],

    github: "Abhishek24122000/Bike-Sharing-Demand-",
    demo: null,
    featured: false,
  },

  {
    id: "covid",
    category: "ML",
    number: "03",
    title: "COVID-19 Diagnosis Prediction",
    subtitle: "Healthcare ML · Classification",
    description:
      "Machine-learning classification workflow for COVID-19 diagnosis using symptom and patient-level screening data.",

    bullets: [
      "Analysed a dataset of 278,848 RT-PCR-tested individuals using demographic, symptom and known-contact features.",
      "Performed feature engineering and exploratory analysis to identify patterns associated with positive and negative diagnosis outcomes.",
      "Compared multiple classification approaches including Decision Tree and Random Forest models to support screening-model selection.",
    ],

    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Classification",
      "EDA",
    ],

    github: "Abhishek24122000/Covid_19_Dignosis_Prediction",
    demo: null,
    featured: false,
  },

  {
    id: "heart",
    category: "ML",
    number: "04",
    title: "Heart Disease Analysis",
    subtitle: "Healthcare Analytics · Risk Classification",
    description:
      "Healthcare analytics project investigating demographic and clinical indicators associated with heart-disease risk.",

    bullets: [
      "Analysed relationships between age, gender, cholesterol, blood pressure and chest-pain characteristics to identify risk patterns.",
      "Used statistical analysis and visualisation to compare distributions and uncover relationships between clinical variables and disease outcomes.",
      "Applied classification approaches including Logistic Regression, Naive Bayes and Decision Tree models for risk prediction.",
    ],

    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Naive Bayes",
      "Decision Tree",
    ],

    github: "Abhishek24122000/Heart_Disease_Analysis",
    demo: null,
    featured: false,
  },

  {
    id: "fraud",
    category: "ML",
    number: "05",
    title: "Credit Card Fraud Detection",
    subtitle: "Fraud Analytics · Classification",
    description:
      "Machine-learning workflow for identifying suspicious credit-card transactions through model comparison and validation.",

    bullets: [
      "Developed a classification workflow for distinguishing fraudulent and legitimate credit-card transactions from structured transaction features.",
      "Compared ensemble and regularised modelling approaches including Random Forest, AdaBoost and Lasso-based feature selection.",
      "Used preprocessing, model selection and cross-validation techniques to evaluate model reliability for fraud detection.",
    ],

    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "AdaBoost",
      "Lasso",
      "Cross-validation",
    ],

    github: "Abhishek24122000/Credit_Card_fraud_detect_ML",
    demo: null,
    featured: false,
  },

  // =========================================================
  // ARTIFICIAL INTELLIGENCE
  // =========================================================

  {
    id: "ai-data-analyst",
    category: "AI",
    number: "01",
    title: "AI Data Analyst",
    subtitle: "FLAGSHIP · Agentic AI · Natural Language Analytics",
    description:
      "A full-stack agentic data-analysis system that converts natural-language business questions into validated SQL workflows over uploaded datasets.",

    bullets: [
      "Built an agentic analytics platform using React/TypeScript, FastAPI, LangGraph and DuckDB that converts natural-language business questions into executable analytical workflows.",
      "Implemented AST-based SQL sandboxing, table allowlisting, SELECT-only validation and automatic query limits so generated SQL is guarded before execution.",
      "Added self-correcting SQL retries, deterministic result computation, conversational memory and a benchmark harness for evaluating analytical accuracy.",
    ],

    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "LangGraph",
      "DuckDB",
      "Parquet",
      "SQLGlot",
      "LLMs",
    ],

    github: "Abhishek24122000/ai-data-analyst",

    demo: null,

    featured: true,

    flagship: true,

    metrics: [
      "Agentic AI",
      "AST SQL Guard",
      "20-Question Evaluation",
    ],
  },

  {
    id: "cold-email",
    category: "AI",
    number: "02",
    title: "Cold Email Generator",
    subtitle: "Generative AI · Personalisation · Automation",
    description:
      "AI-powered outreach application that combines live job information with resume context to generate personalised professional emails.",

    bullets: [
      "Built a Streamlit application that extracts job information from career pages and combines it with uploaded resume content.",
      "Used LangChain, PyMuPDF and Meta LLaMA 70B through Groq to generate context-aware, professional outreach emails.",
      "Added support for different outreach purposes and multiple languages while keeping API-key handling session-based.",
    ],

    tech: [
      "Python",
      "Streamlit",
      "LangChain",
      "PyMuPDF",
      "Groq",
      "LLaMA 70B",
      "Prompt Engineering",
    ],

    github: "Abhishek24122000/Cold_Email_Generator",

    demo: "bit.ly/43s2jCp",

    featured: true,
  },
];

export const getProjectsByCategory = (category) =>
  projects.filter((project) => project.category === category);