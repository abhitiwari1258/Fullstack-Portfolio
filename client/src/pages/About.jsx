import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import abhishek from "../assets/abhishek.png";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "Tailwind",
  "Git",
  "Express",
  "Postman",
];

const About = () => {
  return (
    <div className="space-y-24">

      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >

          <div>
            <p className="text-blue-500 font-semibold mb-2">
              Full Stack Developer
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              Hi, I'm <span className="text-blue-500">Abhishek</span> 👋
            </h1>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed">
            Passionate full-stack developer focused on building modern,
            scalable, and user-friendly web applications using React,
            Node.js, Express, and MongoDB.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4">

            <a
              href="https://github.com/"
              target="_blank"
              className="bg-gray-900 text-white p-4 rounded-full hover:scale-110 hover:rotate-6 transition duration-300 shadow-md"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="bg-blue-600 text-white p-4 rounded-full hover:scale-110 hover:rotate-6 transition duration-300 shadow-md"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://leetcode.com/"
              target="_blank"
              className="bg-yellow-500 text-white p-4 rounded-full hover:scale-110 hover:rotate-6 transition duration-300 shadow-md"
            >
              <SiLeetcode size={20} />
            </a>

          </div>

          {/* BUTTON */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-7 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            <FaDownload />
            Download Resume
          </a>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

            <img
              src={abhishek}
              alt="profile"
              className="relative w-[350px] rounded-3xl shadow-2xl border-4 border-white"
            />

          </div>

        </motion.div>
      </div>

      {/* INFO + EDUCATION */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* PERSONAL INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
        >

          <h2 className="text-2xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="space-y-5 text-gray-700">

            <p className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              abhishek@example.com
            </p>

            <p className="flex items-center gap-4">
              <FaPhone className="text-green-500 text-xl" />
              +91 XXXXX XXXXX
            </p>

            <p className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              India
            </p>

          </div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
        >

          <h2 className="text-2xl font-bold mb-6">
            Education
          </h2>

          <div className="relative border-l-4 border-blue-500 pl-6">

            <div className="mb-8">
              <h3 className="text-xl font-semibold">
                B.Tech - Computer Science
              </h3>

              <p className="text-gray-500">
                XYZ College • 2021 - 2025
              </p>
            </div>

          </div>

        </motion.div>
      </div>

      {/* SKILLS */}
      <div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{
                scale: 1.08,
                rotate: 1,
              }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition cursor-pointer"
            >
              <p className="font-semibold text-gray-700">
                {skill}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        {[
          { value: "10+", label: "Projects" },
          { value: "1+", label: "Years Learning" },
          { value: "8+", label: "Technologies" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-3xl text-center shadow-lg border border-gray-100"
          >

            <h3 className="text-4xl font-bold text-blue-500 mb-2">
              {item.value}
            </h3>

            <p className="text-gray-600">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default About;