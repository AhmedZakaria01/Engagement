// src/components/Login.jsx
import React, { useState } from "react";
import supabase from "../../supabase"; // Import the supabase client
import { useNavigate } from "react-router-dom";
import "./Login.css";
import App from "./../../App";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const [loading, setLoading] = useState(false); // To track if request is ongoing
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Attempt to log the user in
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setError(error.message); // Set error message if login fails
    } else {
      if (data?.user?.user_metadata?.email_verified) {
        sessionStorage.setItem("authToken", data?.session?.access_token);

        navigate("/messageViewer");
      }
    }
  };

  return (
    <div className="login-header min-h-screen flex items-center justify-center">
      <div className="bg-black/50 p-8 py-24 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold font-mono text-white mb-6 text-center">
          if you can login <br /> That Means you are spcial ❤
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-white  font-medium mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1 ">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full  py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 ${
              loading && "opacity-50 cursor-not-allowed"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
