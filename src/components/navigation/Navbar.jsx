import { FileText, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  trackLinkClick,
  trackResumeOpen,
} from "../../analytics";

export default function Navbar() {
  const handleLinkedInClick = () => {
    trackLinkClick({
      destination: "linkedin",
      label: "LinkedIn",
      location: "navbar",
    });
  };

  const handleGitHubClick = () => {
    trackLinkClick({
      destination: "github",
      label: "GitHub",
      location: "navbar",
    });
  };

  const handleResumeClick = () => {
    trackResumeOpen("navbar_resume");
  };

  return (
    <header className="nav">
      <Link to="/" className="brand">
        AP<span>.</span>
      </Link>

      <nav>
        <a href="/#projects">Projects</a>

        <a href="/#experience">Experience</a>

        <a href="/#education">Education</a>

        <a href="/#certificates">Certificates</a>

        <Link to="/resume" onClick={handleResumeClick}>
          <FileText size={15} />
          Resume
        </Link>
      </nav>

      <div className="nav-social">
        <a
          href="https://linkedin.com/in/abhishek-palsodkar-936937183"
          target="_blank"
          rel="noreferrer"
          onClick={handleLinkedInClick}
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>

        <a
          href="https://github.com/Abhishek24122000"
          target="_blank"
          rel="noreferrer"
          onClick={handleGitHubClick}
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
      </div>
    </header>
  );
}
