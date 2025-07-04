import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mail, Lock, Eye, EyeOff, Truck } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/api/user/login', {
      username,
      password,
    }, {
      withCredentials: true
    });

    if (response.status === 200) {
      navigate('/ManageCompany');
    }
  } catch (error) {
    alert('Invalid credentials');
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-full p-4 shadow-lg mb-4">
              <Truck className="text-blue-700 w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-wide">HighwayIQ</h1>
            <p className="text-blue-100 mt-1 text-sm">Truck Driver Management System</p>
          </div>
        </div>

        {/* Form section */}
        <div className="px-8 py-10 space-y-6">
          <h2 className="text-2xl font-semibold text-center text-blue-900">Welcome Back</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-blue-800">
                Username
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-900 bg-blue-50 placeholder-blue-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-800">
                Password
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 py-3 w-full rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-900 bg-blue-50 placeholder-blue-400"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                  ) : (
                    <Eye className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember + Submit */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-blue-800">Remember me</span>
              </label>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition duration-200"
              >
                Sign In
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-center pt-2">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="bg-blue-50 px-6 py-4 text-center">
          <p className="text-xs text-blue-600">
            © {new Date().getFullYear()} HighwayIQ — All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
