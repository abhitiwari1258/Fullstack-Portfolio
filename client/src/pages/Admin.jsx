import { useEffect, useState } from "react";
import { createProject } from "../services/projectApi";
import { getContact,deleteContact } from "../services/ContactApi";
import toast from "react-hot-toast";
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

  const handleDelete = async(id)=>{
    try{
      await deleteContact(id);
      toast.success("Contact deleted");
      fetchContact()
    }catch (error) {
    toast.error("Delete failed");
  }
    
  }

  useEffect(() => {
    fetchContact();
  }, []);

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

      {/* contact section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Contact Messages</h2>

        {contacts.length === 0 ? (
          <p className="text-gray-500">No messages found</p>
        ) : (
          <div className="grid gap-4">
            {contacts.map((c) => (
              <div key={c._id} className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-semibold">{c.name}</h3>
                <p className="text-sm text-gray-500">{c.email}</p>
                <p className="mt-2">{c.message}</p>

                <button 
                onClick={()=>handleDelete(c._id)}
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
