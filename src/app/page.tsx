"use client";

import React from "react";
import Sidebar from "./dashboard/sidebar"; // Sidebar component
import Navbar from "./dashboard/navbar"; // Navbar component
import CreateAccount from "./create-account/page"; 

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;