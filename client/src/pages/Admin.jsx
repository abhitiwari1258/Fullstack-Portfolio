import { useState } from "react";
import { createProject } from "../services/projectApi";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

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

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          placeholder="Project Title"
          className="border p-2 rounded"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Project Description"
          className="border p-2 rounded"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default Admin;
