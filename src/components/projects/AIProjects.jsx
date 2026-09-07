import { categories, getProjectsByCategory } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AIProjects() {
  const category = "AI";
  const projects = getProjectsByCategory(category);
  const info = categories[category];

  return (
    <main className="page">
      <div className="page-head">
        <Link to="/#projects" className="back">
          <ArrowLeft size={13} />
          All projects
        </Link>

        <span className="label">AI / PROJECT LIBRARY</span>

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