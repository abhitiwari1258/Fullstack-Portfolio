import React from "react";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";

const Projects = () => {
  const dummyProjects = [
    {
      title: "Finance Dashboard",
      description: "Track income and expenses with charts",
    },
    {
      title: "E-commerce App",
      description: "Online shopping platform",
    },
    {
      title: "Chat App",
      description: "Real-time messaging application",
    },
  ];
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        {dummyProjects.length === 0 ? (
          <p className="text-gray-500">No projects found</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {dummyProjects.map((proj, index) => (
              <ProjectCard key={index} {...proj} />
            ))}
          </div>
        )}
    </Layout>
  );
};

export default Projects;
