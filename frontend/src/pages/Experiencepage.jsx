import React from "react";
import Experience from "../components/exp.jsx";

const HackathonExperience = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-left">
          Hackathon Experience
        </h2>

        <Experience
          title="Clowder – AI-Powered Learning Platform"
          description="Built during a hackathon, Clowder is a full-stack MERN platform that personalizes education using AI. Features include chapter-based testing, real-time progress tracking, intelligent code compiling, and community learning features."
          role="Full-Stack Developer"
          timeline="2024 Hackathon"
          color="text-indigo-700"
        />

        <Experience
          title="Burrow – AI-Powered Healthcare Assistant"
          description="Developed at a healthcare hackathon, Burrow uses AI to chat with users, detect symptoms, predict top 3 likely diseases, recommend relevant doctors, and support booking appointments (online/offline). Users can also order medicine or schedule home tests based on prescriptions."
          role="AI & Backend Developer"
          timeline="2025 Hackathon"
          color="text-purple-700"
        />
      </div>
    </section>
  );
};

export default HackathonExperience;
