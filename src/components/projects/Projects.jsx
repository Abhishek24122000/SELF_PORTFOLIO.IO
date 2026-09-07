import {
  ArrowUpRight,
  BarChart3,
  Database,
  BrainCircuit,
  Layers3,
} from "lucide-react";

import { Link } from "react-router-dom";
import { categories } from "../../data/projects";

const icons = {
  DA: BarChart3,
  BI: Database,
  ML: Layers3,
  AI: BrainCircuit,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects"
    >
      <div className="section-head">
        <div>
          <span className="label">
            03 / SELECTED WORK
          </span>

          <h2>
            Four ways I work
            <br />
            <i>with data.</i>
          </h2>
        </div>

        <p>
          A selection of analytics, BI, machine-learning
          and AI projects — from business reporting to
          agentic analytical systems.
        </p>
      </div>

      <div className="category-grid">
        {Object.entries(categories).map(
          ([key, category], index) => {
            const Icon = icons[key];

            return (
              <Link
                key={key}
                to={`/projects/${key.toLowerCase()}`}
                className={`category-card cat-${key}`}
              >
                <div className="category-art">
                  <div className="art-lines" />

                  <Icon size={30} />

                  <span>
                    0{index + 1}
                  </span>
                </div>

                <div className="category-body">
                  <span>{key}</span>

                  <h3>
                    {category.label}
                  </h3>

                  <p>
                    {category.intro}
                  </p>

                  <strong>
                    Explore projects
                    <ArrowUpRight size={16} />
                  </strong>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
}