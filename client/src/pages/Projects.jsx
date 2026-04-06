import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/Layout";
import { getProjects } from '../services/ProjectApi'
import Loading from "../components/Loading";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchProjects()
  },[])

  if (loading) {
    return <Loading/>
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      {projects.length === 0 ? (
        <p className="text-gray-500">No projects found</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <ProjectCard
              key={proj._id}
              _id={proj._id}
              title={proj.title}
              description={proj.description}
              githubLink={proj.githubLink}
              liveLink={proj.liveLink}
              refresh={fetchProjects}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Projects;
