import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProjects } from "../services/ProjectApi";
import ProjectCard from "../components/ProjectCard";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiAngular,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiInsomnia,
  SiCplusplus,
} from "react-icons/si";

const Home = () => {
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // console.log(projects);

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      // console.log(res.data);
      setProject(res.data.slice(0, 3));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-24"
    >
      {/* 🔹 HERO */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-blue-500">Abhishek</span> 👋
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-8">
          I build scalable and modern web applications using{" "}
          <span className="font-medium text-gray-800">
            React, Node.js, and MongoDB
          </span>
          . Focused on clean UI, performance, and real-world solutions.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => navigate("/projects")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border px-6 py-3 rounded-lg hover:bg-gray-100 hover:scale-105 transition"
          >
            Contact Me
          </button>
        </div>
      </section>

      

      {/* 🔹 FEATURED PROJECTS */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          Featured Projects
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">No projects found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((proj) => (
              <ProjectCard
                key={proj._id}
                _id={proj._id}
                title={proj.title}
                description={proj.description}
                githubLink={proj.githubLink}
                liveLink={proj.liveLink}
                refresh={fetchProjects}
                showDelete={false}
                image={proj.image}
                tech={proj.tech}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/projects")}
            className="text-blue-500 hover:underline"
          >
            View All Projects →
          </button>
        </div>
      </section>

      {/* 🔹 ABOUT */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>

        <p className="text-gray-600">
          I'm a full-stack developer focused on building clean UI and scalable
          backend systems.
        </p>
      </section>

      {/* 🔹 CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Work Together 🚀</h2>

        <button
          onClick={() => navigate("/contact")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </button>
      </section>
    </motion.div>
  );
};

const Tech = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
      <div className="text-3xl">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

export default Home;
