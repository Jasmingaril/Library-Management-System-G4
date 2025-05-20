"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CreateAccount = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder for the API endpoint for account creation
    const apiEndpoint = "/api/create-account";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      console.log("Account created!");
      // Handle successful account creation, e.g., redirecting or showing a success message
    } catch (error) {
      console.error("Error creating account:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full"
              src="/library.png"
              alt="Library"
              width={500}
              height={500}
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700">
                Create account
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm">
                  <span className="text-gray-700">Full Name</span>
                  <input
                    value={email}
                    onChange={(e) => setFullName(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your fullname"
                    type="fullname"
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Password</span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your password"
                    type="password"
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Confirm Password</span>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your password again"
                    type="confirmPassword"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Create account
                </button>
              </form>

              <hr className="my-8" />

              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <svg className="w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </button>

              <p className="mt-4">
                <Link href="/login" className="text-sm font-medium text-purple-600 hover:underline">
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;