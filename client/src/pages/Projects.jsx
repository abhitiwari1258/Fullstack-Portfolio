import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/ProjectApi";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

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

  useEffect(() => {
    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.section
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="space-y-12"
>
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">My Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of my recent work and real-world builds
        </p>
      </div>

      {/* Empty State */}
      {projects.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400 py-24 text-lg">
          No projects found
        </div>
      ) : (

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <ProjectCard
              key={proj._id}
              _id={proj._id}
              title={proj.title}
              description={proj.description}
              githubLink={proj.githubLink}
              liveLink={proj.liveLink}
              tech={proj.tech}
              refresh={fetchProjects}
            />
          ))}
        </div>

      )}
    </motion.section>
  );
};

export default Projects;