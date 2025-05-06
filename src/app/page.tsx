import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";
import { Geologica } from "next/font/google";
import React from "react";

// Import the Navbar component
import Navbar from "./dashboard/navbar";

const notonansjp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "600"],
  variable: "--font-noto_sans_jp",
});

const geologica = Geologica({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-geologica",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Library Management System</title>
      </Head>
      {/* Use the Navbar component */}
      <Navbar />
    </>
  );
}