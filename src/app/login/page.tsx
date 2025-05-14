'use client';

import React, { useState } from "react";
import Image from "next/image"; // Ensure you're using the correct import for Next.js

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left Image Section */}
          <div className="hidden md:block md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full"
              src="/library.png" // Ensure this file exists in the public folder
              alt="Library"
              width={500}
              height={500}
            />
          </div>
          

          {/* Login Form Section */}
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Email</span>
                  <input
                    className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                    aria-label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                {/* Password Input */}
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Password</span>
                  <input
                    className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm"
                    type="password"
                    placeholder="Enter your password"
                    aria-label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>

                {/* Login Button */}
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                  aria-label="Log in"
                >
                  Log in
                </button>
              </form>

              <hr className="my-8" />

              {/* Social Login Buttons */}
              <div className="flex flex-col space-y-4">
                {/* GitHub Login */}
                <a
                  href="https://github.com/login"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg hover:border-gray-500 focus:outline-none focus:shadow-outline-gray"
                  aria-label="Log in with GitHub"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.11-.774.42-1.305.763-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.123-.305-.536-1.53.117-3.18 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.65.242 2.875.12 3.18.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.19.694.8.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </a>

                {/* Twitter Login */}
                <a
                  href="https://twitter.com/login"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg hover:border-gray-500 focus:outline-none focus:shadow-outline-gray"
                  aria-label="Log in with Twitter"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.72-2.165-10.148-5.144-.423.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.635.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                  Twitter
                </a>
              </div>

              <p className="mt-4">
                <a
                  className="text-sm font-medium text-purple-600 hover:underline"
                  href="/forgot-password"
                >
                  Forgot your password?
                </a>
              </p>
              <p className="mt-1">
                <a
                  className="text-sm font-medium text-purple-600 hover:underline"
                  href="/create-account"
                >
                  Create account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;