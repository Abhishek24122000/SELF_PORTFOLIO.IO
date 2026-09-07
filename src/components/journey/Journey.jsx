import React from "react";

const experience = [
  {
    date: "Feb 2024 – Apr 2025",
    role: "Junior Data Analyst",
    company: "MapX",
    description:
      "Worked on data analysis, reporting, data pipelines, and geospatial datasets to support business and operational decision-making.",
    tags: ["Python", "SQL", "Power BI", "AWS"],
  },
  {
    date: "Jul 2023 – Dec 2023",
    role: "Data Scientist Intern",
    company: "ViolaVizn Technologies",
    description:
      "Worked on predictive analytics, data cleaning, feature engineering, and model evaluation to develop data-driven solutions.",
    tags: ["Python", "Scikit-learn", "Tableau"],
  },
];

const education = [
  {
    date: "2023 – 2024",
    degree: "M.S. Data Science",
    institution: "University of Arizona",
    description:
      "Graduate studies focused on data science, machine learning, statistical analysis, and applied analytics.",
    tags: ["Data Science", "Machine Learning", "Analytics"],
  },
  {
    date: "2019 – 2022",
    degree: "B.C.A.",
    institution: "MIT World Peace University",
    description:
      "Undergraduate studies in computer applications with a strong foundation in programming, databases, and computer science.",
    tags: ["Computer Applications", "Programming", "Databases"],
  },
];

function JourneyColumn({ title, items }) {
  return (
    <div className="journey-column">
      <div className="journey-column-heading">
        <span className="journey-kicker">MY</span>
        <h2>{title}</h2>
      </div>

      <div className="journey-list">
        {items.map((item, index) => (
          <article className="journey-item" key={`${item.company || item.institution}-${index}`}>
            <div className="journey-date">{item.date}</div>

            <div className="journey-content">
              <h3>{item.role || item.degree}</h3>
              <h4>{item.company || item.institution}</h4>

              <p>{item.description}</p>

              <div className="journey-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-eyebrow">BACKGROUND</span>
          <h2>
            Experience <span>&amp;</span> Education
          </h2>
          <p>
            A journey through data, technology, and continuous learning.
          </p>
        </div>

        <div className="journey-grid">
          <JourneyColumn title="Experience" items={experience} />
          <JourneyColumn title="Education" items={education} />
        </div>

        <div className="language-journey">
          <div className="language-copy">
            <span className="section-eyebrow">LANGUAGE JOURNEY</span>
            <h3>日本語 — Japanese</h3>
            <p>
              Continuing my Japanese language journey with a focus on
              communication, culture, and professional opportunities in Japan.
            </p>
            <div className="language-level">JLPT N3 • 2.5+ Years</div>
          </div>

          <div className="language-japanese">
            <span>一歩ずつ。</span>
            <small>Step by step.</small>
          </div>
        </div>
      </div>
    </section>
  );
}