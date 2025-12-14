import React from "react";
import { useNavigate } from "react-router-dom";
import Experience from "../components/exp.jsx";

const ExperiencePage = () => {
  const navigate = useNavigate();

  const LinkButton = ({ color }) => (
    <span
      onClick={() => navigate("/projects")}
      className={`mt-3 inline-block cursor-pointer font-medium ${color} hover:underline`}
    >
      View Project →
    </span>
  );

  return (
    <section
      className="py-16 px-4 flex justify-center"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-12">
          Experience
        </h2>

        {/* ===== INTERNSHIP ===== */}
        <Experience
          title="Axamine AI"
          role="Full Stack Developer Intern"
          timeline="Dec 2025 – Mar 2026 · Remote"
          color="text-emerald-600"
          description="Working on AI-powered web applications, contributing to both frontend and backend development with a focus on clean, scalable code and performance."
        />

        {/* Divider */}
        <div className="my-12 h-px bg-gray-300 dark:bg-gray-700 opacity-40" />

        {/* ===== HACKATHONS ===== */}
        <h3 className="text-2xl font-bold mb-8">
          Hackathons
        </h3>

        <Experience
          title="Clowder"
          role="Team Lead · Full Stack Developer"
          timeline="Sep 2024"
          color="text-indigo-600"
          description="AI-powered learning platform built using MERN stack with personalized assessments, progress tracking, and community features."
        >
          <LinkButton color="text-indigo-500" />
        </Experience>

        <Experience
          title="Burrow"
          role="Team Lead · Backend / AI Developer"
          timeline="Jul 2025"
          color="text-purple-600"
          description="Healthcare assistant that predicts diseases from symptoms, recommends doctors, and supports appointments and medicine orders."
        >
          <LinkButton color="text-purple-500" />
        </Experience>

      </div>
    </section>
  );
};

export default ExperiencePage;
