import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      <p className="text-gray-600 mb-4">{description}</p>

      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Live
        </button>
        <button className="border px-4 py-1 rounded">Code</button>
      </div>
    </div>
  );
};

export default ProjectCard;
