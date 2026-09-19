import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "./ProjectCard";
import {
  categories,
  getProjectsByCategory,
} from "../../data/projects";

export default function BIProjects() {
  const category = "BI";
  const projects = getProjectsByCategory(category);
  const info = categories[category];

  return (
    <main className="page">
      <div className="page-head">
        <Link to="/#projects" className="back">
          <ArrowLeft size={13} />
          All projects
        </Link>

        <span className="label">BI / PROJECT LIBRARY</span>

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
