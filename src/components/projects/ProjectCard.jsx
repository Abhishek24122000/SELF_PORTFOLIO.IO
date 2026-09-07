import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";

const githubUrl = (repo) =>
  repo ? `https://github.com/${repo}` : null;

const demoUrl = (demo) =>
  demo ? `https://${demo}` : null;

export default function ProjectCard({ project }) {
  return (
    <article
      className={`project-detail ${
        project.flagship ? "project-flagship" : ""
      }`}
    >
      <div className="project-index">
        {project.number}
      </div>

      <div className="project-visual">
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <div className="visual-code">
          {project.flagship ? (
            <>
              <Sparkles size={20} />
              <span>AI</span>
            </>
          ) : (
            <span>{project.category}</span>
          )}
        </div>

        {project.flagship && (
          <div className="flagship-badge">
            <Sparkles size={12} />
            Portfolio USP
          </div>
        )}
      </div>

      <div className="project-copy">
        <div className="project-kicker">
          {project.subtitle}
        </div>

        <h2>{project.title}</h2>

        <p className="project-description">
          {project.description}
        </p>

        <ul className="project-bullets">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {project.metrics?.length > 0 && (
          <div className="metrics">
            {project.metrics.map((metric) => (
              <b key={metric}>{metric}</b>
            ))}
          </div>
        )}

        <div className="tags">
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.demo && (
            <a
              className="btn primary"
              href={demoUrl(project.demo)}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={15} />
              Live demo
            </a>
          )}

          {project.github && (
            <a
              className="btn"
              href={githubUrl(project.github)}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}