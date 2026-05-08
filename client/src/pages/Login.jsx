import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form,
      );

      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);

        toast.success("Login successful");

        navigate("/admin");
      }
    } catch (err) {
      console.log("FULL ERROR:", err);
      const message = err.response?.data?.msg || "Network / server error";

      toast.error(message);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      px-6 py-20
      bg-gray-50 dark:bg-black
      transition duration-300
    "
    >
      <div
        className="
        w-full max-w-md
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-xl
        border border-gray-200 dark:border-gray-800
        rounded-3xl
        p-8 md:p-10
        shadow-2xl
      "
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Welcome Back 👋
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            Login to access the admin dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="
              w-full
              bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              p-4 rounded-2xl
              outline-none
              focus:ring-2 focus:ring-blue-500
              transition
            "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="
              w-full
              bg-gray-50 dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-white
              p-4 rounded-2xl
              outline-none
              focus:ring-2 focus:ring-blue-500
              transition
            "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
            w-full
            bg-gradient-to-r from-blue-500 to-cyan-500
            text-white
            py-4 rounded-2xl
            font-semibold
            shadow-lg
            hover:scale-[1.02]
            hover:shadow-blue-500/30
            transition duration-300
          "
          >
            Login
          </button>
        </form>

        {/* Bottom text */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
          Secure Admin Authentication System 🔒
        </p>
      </div>
    </div>
  );
};

export default Login;
