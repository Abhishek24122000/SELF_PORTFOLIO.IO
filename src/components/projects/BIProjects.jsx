import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { categories, getProjectsByCategory } from "../../data/projects";

export default function DAProjects() {
  const projects = getProjectsByCategory("DA");

  return (
    <ProjectLibrary
      category="DA"
      projects={projects}
    />
  );
}

function ProjectLibrary({ category, projects }) {
  const info = categories[category];

  return (
    <main className="page">
      <div className="page-head">
        <Link to="/#projects" className="back">
          <ArrowLeft size={13} />
          All projects
        </Link>

        <span className="label">
          {category} / PROJECT LIBRARY
        </span>

        <h1>{info.label}.</h1>

        <p>{info.intro}</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}