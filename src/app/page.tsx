"use client";

import React from "react";
import Sidebar from "./dashboard/sidebar";
import Navbar from "./dashboard/navbar";
import CreateAccount from "./create-account/page";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
      </div>
    </div>
  );
};

export default Home;