import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProjects } from "../services/ProjectApi";
import ProjectCard from "../components/ProjectCard";
import {FaLinkedin, FaEnvelope } from "react-icons/fa";

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
      {/* hero */}
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

      {/* icons */}

      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-14 text-gray-900 dark:text-white">
          Tech Stack
        </h2>

        <div className="space-y-10">
          {/* FRONTEND */}
          <div>
            <h3
              className="text-xl font-semibold mb-6
  text-gray-800 dark:text-gray-200"
            >
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              <Tech icon={<FaReact className="text-blue-500" />} name="React" />
              <Tech
                icon={<FaHtml5 className="text-orange-500" />}
                name="HTML"
              />
              <Tech icon={<FaCss3Alt className="text-blue-600" />} name="CSS" />
              <Tech
                icon={<SiJavascript className="text-yellow-400" />}
                name="JavaScript"
              />
              <Tech
                icon={<SiTailwindcss className="text-sky-400" />}
                name="Tailwind"
              />
              <Tech
                icon={<SiBootstrap className="text-purple-500" />}
                name="Bootstrap"
              />
              <Tech
                icon={<SiAngular className="text-red-500" />}
                name="Angular"
              />
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3
              className="text-xl font-semibold mb-6
  text-gray-800 dark:text-gray-200"
            >
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              <Tech
                icon={<FaNodeJs className="text-green-500" />}
                name="Node.js"
              />
              <Tech
                icon={<SiExpress className="text-gray-700" />}
                name="Express"
              />
            </div>
          </div>

          {/* DATABASE */}
          <div>
            <h3
              className="text-xl font-semibold mb-6
  text-gray-800 dark:text-gray-200"
            >
              Database
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              <Tech
                icon={<SiMongodb className="text-green-600" />}
                name="MongoDB"
              />
              <Tech
                icon={<SiMysql className="text-blue-600" />}
                name="SQL Server"
              />
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h3
              className="text-xl font-semibold mb-6
  text-gray-800 dark:text-gray-200"
            >
              Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-5">
              <Tech
                icon={<FaGitAlt className="text-orange-500" />}
                name="Git"
              />
              <Tech
                icon={<FaGithub className="text-black dark:text-white" />}
                name="GitHub"
              />
              <Tech
                icon={<SiPostman className="text-orange-400" />}
                name="Postman"
              />
              <Tech
                icon={<SiInsomnia className="text-purple-500" />}
                name="Insomnia"
              />
            </div>
          </div>

          {/* LANGUAGE */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">Language</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Tech
                icon={<SiCplusplus className="text-blue-600" />}
                name="C++"
              />
            </div>
          </div>
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
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
        max-w-4xl mx-auto
        text-center
        py-20 px-6
      "
      >
        <span
          className="
          inline-block
          px-4 py-2 mb-6
          rounded-full
          bg-blue-100 dark:bg-blue-900/40
          text-blue-600 dark:text-blue-400
          text-sm font-medium
        "
        >
          About Me
        </span>

        <h2
          className="
          text-4xl md:text-5xl
          font-bold
          mb-8
          leading-tight
          text-gray-900 dark:text-white
        "
        >
          Passionate Full Stack Developer Building Modern Web Experiences
        </h2>

        <p
          className="
          text-lg
          leading-relaxed
          text-gray-600 dark:text-gray-400
          max-w-3xl mx-auto
          "
        >
          I specialize in creating responsive frontends and scalable backend
          systems using modern technologies like React, Node.js, Express,
          MongoDB, and Tailwind CSS. I enjoy solving real-world problems,
          optimizing performance, and building clean user experiences.
        </p>
      </motion.section>

      {/* 🔹 CTA */}
      <section
        className="
        relative overflow-hidden
        bg-gradient-to-r
        from-blue-500 to-cyan-500
        dark:from-blue-900 dark:to-cyan-900
        rounded-3xl
        py-20 px-8
        text-center
        shadow-2xl
      "
      >
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let’s Build Something Amazing 
          </h2>

          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            I’m open to internships, freelance work, and full-stack developer
            opportunities. Let’s create modern and scalable web applications
            together.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="
            bg-white text-blue-600
            px-8 py-4
            rounded-2xl
            font-semibold
            shadow-xl
            hover:scale-105
            hover:shadow-white/30
            transition duration-300
          "
          >
            Contact Me
          </button>
        </div>
      </section>

      <footer
        className="
        mt-20
        bg-white dark:bg-gray-950
        border-t border-gray-200 dark:border-gray-800
        transition duration-300
      "
      >
        <div
          className="
          max-w-7xl mx-auto
          px-6 py-12
          grid md:grid-cols-3 gap-10
        "
        >
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Abhishek.dev
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Full Stack Developer passionate about building modern, scalable
              and user-friendly web applications.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
              >
                Home
              </a>

              <a
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
              >
                About
              </a>

              <a
                href="/projects"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
              >
                Projects
              </a>

              <a
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition"
              >
                Contact
              </a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/abhitiwari1258"
                target="_blank"
                className="
                bg-gray-100 dark:bg-gray-800
                p-3 rounded-full
                text-gray-700 dark:text-white
                hover:bg-blue-500 hover:text-white
                transition duration-300">
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abhishek-tiwari-054bab34b/"
                target="_blank"
                className="
            bg-gray-100 dark:bg-gray-800
            p-3 rounded-full
            text-gray-700 dark:text-white
            hover:bg-blue-500 hover:text-white
            transition duration-300
          "
              >
                <FaLinkedin />
              </a>

              <a
                href="abhishektiwari1258@email.com"
                className="
                bg-gray-100 dark:bg-gray-800
                p-3 rounded-full
                text-gray-700 dark:text-white
                hover:bg-blue-500 hover:text-white
                transition duration-300
              "
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
      border-t border-gray-200 dark:border-gray-800
      py-5 text-center
      text-gray-500 dark:text-gray-400
      text-sm
    "
        >
          © 2026 Abhishek.dev — All Rights Reserved.
        </div>
      </footer>

    </motion.div>
  );
};

const Tech = ({ icon, name }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-700
        rounded-2xl
        p-6
        w-28 h-28
        flex flex-col items-center justify-center
        text-center
        shadow-lg hover:shadow-2xl
        hover:-translate-y-2
        transition duration-300
        cursor-pointer
      "
    >
      <div className="text-4xl mb-3">{icon}</div>

      <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">
        {name}
      </p>
    </motion.div>
  );
};

export default Home;
