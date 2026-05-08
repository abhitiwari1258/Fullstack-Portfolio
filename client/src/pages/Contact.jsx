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
    <div className="max-w-2xl mx-auto
    bg-white/80 dark:bg-gray-900/80
    backdrop-blur-xl
    border border-gray-200 dark:border-gray-800
    p-8 md:p-10
    rounded-3xl
    shadow-2xl
    transition duration-300">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Contact Me</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
        type="text"
        name="name"
        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700
        text-gray-900 dark:text-white p-4 rounded-2xl
        outline-none focus:ring-2 focus:ring-blue-500
        transition"
        value={form.name}
        placeholder="Enter your Name" 
        onChange={handleChange}
        required
        />

        <input 
        type="email" 
        name="email"
        className="w-full
        bg-gray-50 dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        text-gray-900 dark:text-white
        p-4 rounded-2xl
        outline-none
        focus:ring-2 focus:ring-blue-500
        transition"
        required
        value={form.email}
        placeholder="Enter your Email" 
        onChange={handleChange}
        />

        <input 
        type="text" 
        name="message"
        className="w-full h-36
        bg-gray-50 dark:bg-gray-800
        border border-gray-300 dark:border-gray-700
        text-gray-900 dark:text-white
        p-4 rounded-2xl
        outline-none
        resize-none
        focus:ring-2 focus:ring-blue-500
        transition"
        required
        value={form.message}
        placeholder="Enter your Message" 
        onChange={handleChange}
        />

        <button 
        type="submit"
        className="w-full
        bg-gradient-to-r from-blue-500 to-cyan-500
        text-white
        py-4 rounded-2xl
        font-semibold
        shadow-lg
        hover:scale-[1.02]
        hover:shadow-blue-500/30
        transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
