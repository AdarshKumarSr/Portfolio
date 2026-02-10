import React from "react";
import Experience from "../components/exp.jsx";
import axamineLogo from "../assets/newaxamine.png";
import accreteLogo from "../assets/accrete.png";

const ExperiencePage = () => {
  const ProjectLinks = () => (
    <div className="flex gap-6 text-sm font-medium">
      <a
        href="https://github.com/AdarshKumarSr/Kalp.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500 hover:underline"
      >
        View Project →
      </a>

      <a
        href="https://kalp-ai-1.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-text-main hover:underline"
      >
        Live →
      </a>
    </div>
  );

  return (
    <section
      className="py-16 px-4 flex justify-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12">
          Professional Experience
        </h2>

        {/* ===== INTERNSHIP ===== */}
        {/* <Experience
          title={
            <div className="flex items-center gap-3">
              <img
                src={axamineLogo}
                alt="Axamine AI Logo"
                className="w-9 h-9 object-contain"
              />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 tracking-wide">
                Axamine AI
              </span>
            </div>
          }
          role="Full Stack Developer Intern"
          timeline="Dec 2025 – Mar 2026 · Remote"
          description={
            <>
              Led the end-to-end development of <strong>Kalp Labs</strong>, a
              research-focused web platform built from scratch.
              <br /><br />
              Kalp Labs supports two distinct user roles:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Researchers</strong> — publish and manage research</li>
                <li><strong>Explorers</strong> — browse and discover research</li>
              </ul>
            </>
          }
        >
          <ProjectLinks />
        </Experience> */}

        <Experience
          title={
            <div className="flex items-center gap-3">
              <img
                src={accreteLogo}
                alt="Accrete InfoSolution Technologies Logo"
                className="w-15 h-11 object-contain"
              />
              <span
                className="font-bold tracking-wide"
                style={{ color: "#EF5350" }}
              >
                Accrete InfoSolution Technologies Pvt. Ltd.
              </span>
            </div>
          }
          role="Software Development Engineer Intern (Training)"
          timeline="Jan 2026 – Present · Onsite"
          description={
            <>
              Currently undergoing structured internship training with a focus on
              backend development fundamentals and real-world engineering practices.
              <br /><br />
              Actively learning and applying:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>MySQL</strong> — writing queries, joins, and schema design</li>
                <li><strong>Database Design</strong> — normalization & relational modeling</li>
                <li><strong>Node.js</strong> — backend basics and server-side logic</li>
                <li><strong>Git & GitHub</strong> — version control and collaboration workflows</li>
              </ul>
              <br />
              Focused on building a strong foundation in software engineering concepts
              while preparing for production-level development work.
            </>
          }
        />



      </div>
    </section>
  );
};

export default ExperiencePage;
