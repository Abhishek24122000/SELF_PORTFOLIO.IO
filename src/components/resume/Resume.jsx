import { FileText, ArrowUpRight } from "lucide-react";
import { trackResumeOpen } from "../../analytics";

const resumes = [
  {
    number: "01",
    title: "English Résumé",
    description: "Corporate + technical + business impact.",
    type: "english_resume",
    file: "/assets/resumes/Abhishek_Resume_English.pdf",
  },
  {
    number: "02",
    title: "日本語 履歴書",
    description: "Japanese résumé format.",
    type: "japanese_rirekisho",
    file: "/assets/resumes/Abhishek_Rirekisho_Japanese.pdf",
  },
  {
    number: "03",
    title: "職務経歴書",
    description: "Japanese career history document.",
    type: "japanese_shokuumu_keirekisho",
    file: "/assets/resumes/Abhishek_Shokuumu_Keirekisho.pdf",
  },
];

export default function Resume() {
  const handleResumeOpen = (resumeType) => {
    trackResumeOpen(resumeType);
  };

  return (
    <main className="page">
      <div className="page-head">
        <span className="label">RESUME / 履歴書</span>

        <h1>Choose a résumé.</h1>

        <p>Three versions for different hiring contexts.</p>
      </div>

      <div className="resume-grid">
        {resumes.map((resume) => (
          <a
            key={resume.type}
            className="resume-card"
            href={resume.file}
            target="_blank"
            rel="noreferrer"
            onClick={() => handleResumeOpen(resume.type)}
          >
            <FileText />

            <span>{resume.number}</span>

            <h2>{resume.title}</h2>

            <p>{resume.description}</p>

            <strong>
              Open PDF
              <ArrowUpRight size={16} />
            </strong>
          </a>
        ))}
      </div>
    </main>
  );
}
