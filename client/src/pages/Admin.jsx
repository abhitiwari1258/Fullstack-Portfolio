import { useEffect, useState } from "react";
import { createProject } from "../services/projectApi";
import { getContact, deleteContact } from "../services/ContactApi";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [contacts, setContacts] = useState([]);

  const fetchContact = async () => {
    try {
      const res = await getContact();
      setContacts(res.data);
    } catch (error) {
      console.log("Admin Error : ", error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProject(form);
      alert("Project added");
      setForm({ title: "", description: "" });
    } catch (error) {
      console.error(error);
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
    fetchContact();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">

    {/* 🔥 Header */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Admin Dashboard
      </h1>
      <p className="text-gray-500 mt-2">
        Manage your projects and messages
      </p>
    </motion.div>

    {/* 🔥 Grid Layout */}
    <div className="grid md:grid-cols-2 gap-8">

      {/* ================= PROJECT FORM ================= */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border"
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

          <textarea
            name="description"
            placeholder="Project Description"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            value={form.description}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            Add Project
          </button>

        </form>
      </motion.div>

      {/* ================= CONTACT SECTION ================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg border"
      >
        <h2 className="text-xl font-semibold mb-4 text-purple-600">
          Contact Messages
        </h2>

        {contacts.length === 0 ? (
          <p className="text-gray-500">No messages found</p>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {contacts.map((c) => (
              <motion.div
                key={c._id}
                whileHover={{ scale: 0.97 }}
                className="bg-white p-4 rounded-xl shadow-sm border hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.email}</p>
                <p className="mt-2 text-gray-700">{c.message}</p>

                <button
                  onClick={() => handleDelete(c._id)}
                  className="mt-3 bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </motion.div>
            ))}
          </div>
        )}

      </motion.div>

    </div>

  </div>
);
  // );
};

export default Admin;
