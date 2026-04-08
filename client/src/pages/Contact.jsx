import React, { useState } from "react";

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

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(form.name === '' || form.email === '' || form.message === '') alert('pls fill all the form')
    console.log(form);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
        type="text"
        name="name"
        className="border p-2 rounded"
        value={form.name}
        placeholder="Enter your Name" 
        onChange={handleChange}
        />

        <input 
        type="email" 
        name="email"
        className="border p-2 rounded"
        value={form.email}
        placeholder="Enter your Email" 
        onChange={handleChange}
        />

        <input 
        type="text" 
        name="message"
        className="border p-2 rounded"
        value={form.message}
        placeholder="Enter your Message" 
        onChange={handleChange}
        />

        <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
