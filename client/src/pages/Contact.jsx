import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast"

const Contact = () => {
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:5000/api/contact",form)

      toast.success("Message sent successfully 👍")
      setForm({name:"" ,email: "",message: "" })
    }catch(error){
      toast.error("Something wrong")
    }
    // if(form.name === '' || form.email === '' || form.message === '') alert('pls fill all the form')
    // console.log(form);
  }
  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
        type="text"
        name="name"
        className="w-full border p-3 rounded-md"
        value={form.name}
        placeholder="Enter your Name" 
        onChange={handleChange}
        required
        />

        <input 
        type="email" 
        name="email"
        className="w-full border p-3 rounded-md"
        required
        value={form.email}
        placeholder="Enter your Email" 
        onChange={handleChange}
        />

        <input 
        type="text" 
        name="message"
        className="w-full border p-3 rounded-md h-32"
        required
        value={form.message}
        placeholder="Enter your Message" 
        onChange={handleChange}
        />

        <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
