import React from "react";
import { useNavigate } from "react-router-dom";
import Experience from "../components/exp.jsx";

const HackathonExperience = () => {
  const navigate = useNavigate();

  const LinkButton = ({ color, text }) => (
    <span
      onClick={() => navigate("/projects")}
      className={`mt-4 inline-block cursor-pointer font-semibold ${color} hover:underline`}
    >
      {text} <span className="ml-1">→</span>
    </span>
  );

  return (
    <section
      className="py-16 px-4 flex flex-col items-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-extrabold mb-12 text-left" style={{ color: "var(--text-color)" }}>
          Hackathon Experience
        </h2>

        <p className="mb-8 text-lg" style={{ color: "var(--text-color)" }}>
          I don't have formal work experience yet, but I have actively participated in various hackathons as a team leader. Here's a snapshot of my journey:
        </p>

        <Experience
          title="Clowder – AI-Powered Learning Platform"
          description="Built during a hackathon, Clowder is a full-stack MERN platform that personalizes education using AI. Features include chapter-based testing, real-time progress tracking, intelligent code compiling, and community learning features."
          role="Team Leader & Full-Stack Developer"
          timeline="September 2024"
          color="text-indigo-700"
        >
          <LinkButton color="text-indigo-600" text="View Project" />
        </Experience>

        <Experience
          title="Burrow – AI-Powered Healthcare Assistant"
          description="Developed at a healthcare hackathon, Burrow uses AI to chat with users, detect symptoms, predict top 3 likely diseases, recommend relevant doctors, and support booking appointments (online/offline). Users can also order medicine or schedule home tests based on prescriptions."
          role="Team Leader & AI/Backend Developer"
          timeline="July 2025"
          color="text-purple-700"
        >
          <LinkButton color="text-purple-600" text="View Project" />
        </Experience>
      </div>
    </section>
  );
};

export default HackathonExperience;
