import { useEffect, useState } from "react";
import { createProject } from "../services/projectApi";
import { getContact, deleteContact } from "../services/ContactApi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { getProjects } from "../services/ProjectApi";

const Admin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: "",
    githubLink: "",
    liveLink: "",
    tech: "",
  });

  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("dashboard");

  const fetchContact = async () => {
    try {
      const res = await getContact();
      setContacts(res.data);
    } catch (error) {
      console.log("Admin Error : ", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedData = {
        ...form,
        tech: form.tech.split(",").map((t) => t.trim()),
      };

      await createProject(formattedData);
      toast.success("Project added 🚀");
      setForm({
        title: "",
        description: "",
        image: "",
        githubLink: "",
        liveLink: "",
        tech: "",
      });

      fetchProjects();
    } catch (error) {
      toast.error("Failed to add project");
    }
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Want to LogOut!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, LoggedOut!",
    });

    if (result.isConfirmed) {
      try {
        localStorage.removeItem("token");
        toast.success("Log out successfull");
        navigate("/");
      } catch (error) {
        toast.error("LogOut failed");
      }
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This contact will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteContact(id);
        toast.success("Contact deleted");
        fetchContact();
      } catch (error) {
        toast.error("Delete failed");
      }
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await Promise.all([fetchContact(), fetchProjects()]);
      setLoading(false);
    };
    loadData();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 🔥 Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-blue-500 mb-8">Admin Panel</h2>

        <nav className="flex flex-col gap-4 text-gray-700">
          {["dashboard", "projects", "contacts"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-left px-4 py-2 rounded-lg transition ${
                activeTab === tab
                  ? "bg-blue-500 text-white font-semibold"
                  : "hover:bg-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* 🔥 Main Content */}
      <div className="flex-1 p-6">
        {/* 🔥 Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-md"
          >
            Logout
          </button>
        </div>

        {/* 🔥 Stats Cards */}

        {activeTab === "dashboard" && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-xl shadow"
            >
              <p className="text-gray-500">Total Messages</p>
              <h2 className="text-3xl font-bold">{contacts.length}</h2>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-xl shadow"
            >
              <p className="text-gray-500">Projects</p>
              <h2 className="text-3xl font-bold">{projects.length}</h2>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-5 rounded-xl shadow"
            >
              <p className="text-gray-500">Status</p>

              {loading ? (
                <h2 className="text-gray-400">Loading...</h2>
              ) : projects.length === 0 ? (
                <h2 className="text-yellow-500 font-bold">No Projects</h2>
              ) : contacts.length === 0 ? (
                <h2 className="text-blue-500 font-bold">Idle</h2>
              ) : (
                <h2 className="text-green-500 font-bold">Active</h2>
              )}
            </motion.div>
          </div>
        )}

        {/* 🔥 Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* ========== PROJECT FORM ========= */}

          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h2 className="text-xl font-semibold mb-4 text-blue-600">
                Add Project
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  name="title"
                  placeholder="Project Title"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  value={form.title}
                  onChange={handleChange}
                />

                <input
                  name="image"
                  placeholder="Image URL"
                  value={form.image}
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <input
                  name="githubLink"
                  placeholder="GitHub Link"
                  value={form.githubLink}
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <input
                  name="liveLink"
                  placeholder="Live Link"
                  value={form.liveLink}
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <input
                  name="tech"
                  placeholder="Tech (React, Node, MongoDB)"
                  value={form.tech}
                  onChange={handleChange}
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />

                <textarea
                  name="description"
                  placeholder="Project Description"
                  className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                  value={form.description}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:scale-105 transition disabled:opacity-50"
                >
                  {loading ? "Adding..." : "Add Project"}
                </button>
              </form>
            </motion.div>
          )}

          {/* ===== CONTACT SECTION ====== */}

          {activeTab === "contacts" && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h2 className="text-xl font-semibold mb-4 text-purple-600">
                Contact Messages
              </h2>

              {contacts.length === 0 ? (
                <p className="text-gray-500">No messages found</p>
              ) : (
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {contacts.map((c) => (
                    <div
                      key={c._id}
                      className="bg-gray-50 p-4 rounded-xl border"
                    >
                      <h3 className="font-semibold">{c.name}</h3>
                      <p className="text-sm text-gray-500">{c.email}</p>
                      <p className="mt-2 text-gray-700">{c.message}</p>

                      <button
                        onClick={() => handleDelete(c._id)}
                        className="mt-3 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
