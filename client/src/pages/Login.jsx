import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [form,setForm] = useState({
        email:"",
        password:"",
    })
    console.log(form);

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setForm({...form, [name]:value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res = await axios.post("http://localhost:5000/api/auth/login", form);

           console.log("SUCCESS:", res.data);
            

            localStorage.setItem("token",res.data.token)

            toast.success("Login successful");

            navigate("/admin");

        }catch(err){
            console.log("ERROR:", err.response?.data);
            toast.error("Invalid credentials");
        }
    }
    
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 rounded"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
