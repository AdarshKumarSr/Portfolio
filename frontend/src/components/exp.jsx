import React from "react";

const Experience = ({
  title,
  description,
  role,
  timeline,
  color,
  children,
}) => {
  return (
    <div
      className="mb-10 p-6 rounded-lg shadow-md"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      {/* Company Name */}
      <h3 className={`text-2xl font-bold ${color}`}>
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-text-muted">
        {description}
      </p>

      {/* Role */}
      <p className="mt-3 font-semibold">
        {role}
      </p>

      {/* Timeline */}
      <p className="mt-1 text-sm text-text-muted">
        {timeline}
      </p>

      {/* Optional buttons (GitHub / Live etc.) */}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Experience;
