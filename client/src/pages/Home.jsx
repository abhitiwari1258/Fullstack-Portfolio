import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Abhishek 👋</h1>

        <p className="text-gray-600 max-w-xl mb-6">
          I am a full-stack developer building modern web applications using
          React, Node.js, and MongoDB.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => navigate("/projects")}
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border px-6 py-2 rounded-md hover:bg-gray-100"
          >
            Contact Me
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
