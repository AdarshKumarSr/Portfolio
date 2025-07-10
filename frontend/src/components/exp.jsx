import React from "react";

const Experience = ({ title, description, role, timeline, color = "text-indigo-700" }) => {
  return (
    <div className="mb-10">
      <h3 className={`text-2xl font-semibold ${color}`}>{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
      <p className="text-sm text-gray-500 mt-1">
        Role: {role} | Timeline: {timeline}
      </p>
    </div>
  );
};

export default Experience;
