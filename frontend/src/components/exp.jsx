import React from "react";

const Experience = ({ title, description, role, timeline, color, children }) => {
  return (
    <div
      className="mb-10 p-6 rounded-lg shadow-md"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <h3 className={`text-2xl font-bold ${color}`} style={{ color: color }}>
        {title}
      </h3>
      <p className="mt-2" style={{ color: "var(--text-color)" }}>
        {description}
      </p>
      <p className="mt-2 font-semibold" style={{ color: "var(--text-color)" }}>
        {role}
      </p>
      <p className="mt-1" style={{ color: "var(--link-text)" }}>
        {timeline}
      </p>

      {/* Render any extra content like buttons */}
      {children}
    </div>
  );
};

export default Experience;
