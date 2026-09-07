import { Routes, Route } from "react-router-dom";
import { Mail } from "lucide-react";

import WelcomeSequence from "./components/intro/WelcomeSequence";
import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";

import DAProjects from "./components/projects/DAProjects";
import BIProjects from "./components/projects/BIProjects";
import MLProjects from "./components/projects/MLProjects";
import AIProjects from "./components/projects/AIProjects";

import Journey from "./components/journey/Journey";
import Certificates from "./components/certificates/Certificates";
import Resume from "./components/resume/Resume";

function Home() {
  return (
    <>
      <WelcomeSequence />

      <Navbar />

      <main>
        <Hero />

        <section className="section statement">
          <span className="label">
            01 / APPROACH
          </span>

          <div>
            <h2>
              Analytics should make
              <br />
              <i>things clearer.</i>
            </h2>

            <p>
              I work across data analytics, business intelligence,
              machine learning and artificial intelligence — connecting
              technical analysis with practical business decisions.
            </p>
          </div>
        </section>

        <Projects />

        <section className="section method">
          <div className="section-head">
            <div>
              <span className="label">
                05 / METHOD
              </span>

              <h2>
                Question → analysis
                <br />
                <i>→ outcome.</i>
              </h2>
            </div>

            <p>
              Start with the business problem. Then choose the
              simplest technical approach that can answer it well.
            </p>
          </div>

          <div className="method-row">
            {[
              {
                title: "Understand",
                text: "Define the business question before touching the data.",
              },
              {
                title: "Explore",
                text: "Clean, structure and investigate the signal.",
              },
              {
                title: "Model",
                text: "Use analytics, BI, ML or AI where it creates value.",
              },
              {
                title: "Communicate",
                text: "Turn the result into something useful to a decision-maker.",
              },
            ].map((item, index) => (
              <div key={item.title}>
                <span>
                  0{index + 1}
                </span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Journey />

        <Certificates />

        <section
          className="section contact"
          id="contact"
        >
          <span className="label">
            09 / CONTACT
          </span>

          <h2>
            Have a problem worth
            <br />
            <i>solving?</i>
          </h2>

          <p>
            I'm open to data, BI, analytics and AI
            opportunities, especially with teams working
            across India and Japan.
          </p>

          <a
            className="btn primary"
            href="mailto:abhishek.palsodkar@gmail.com"
          >
            Get in touch
            <Mail size={16} />
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>AP.</strong>{" "}
        ABHISHEK PALSODKAR
      </div>

      <span>
        Better data. A smarter world.
      </span>

      <span>
        © 2026
      </span>
    </footer>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/projects/da"
        element={<DAProjects />}
      />

      <Route
        path="/projects/bi"
        element={<BIProjects />}
      />

      <Route
        path="/projects/ml"
        element={<MLProjects />}
      />

      <Route
        path="/projects/ai"
        element={<AIProjects />}
      />

      <Route
        path="/resume"
        element={
          <>
            <Navbar />
            <Resume />
            <Footer />
          </>
        }
      />

      <Route
        path="*"
        element={<Home />}
      />
    </Routes>
  );
}