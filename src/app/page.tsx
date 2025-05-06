import Head from "next/head";
import { Noto_Sans_JP } from "next/font/google";
import { Geologica } from "next/font/google";
import React from "react";

// Import the sidebar and navbar components
import Sidebar from "./dashboard/sidebar"; // Ensure this path is correct
import Navbar from "./dashboard/navbar"; // Ensure this path is correct

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
      <div className="flex flex-col h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-1">
            <div className="w-full mb-8 overflow-hidden shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                      <th className="px-4 py-3">Book ID</th>
                      <th className="px-4 py-3">Book Title</th>
                      <th className="px-4 py-3">Author</th>
                      <th className="px-4 py-3">Genre</th>
                      <th className="px-4 py-3">Publication Date</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">1</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt="Profile picture of Hans Burger"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">The Hunger Games</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">Suzzane Collins</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Mystery
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">6/10/2020</td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">2</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              className="object-cover w-full h-full rounded-full"
                              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                              alt="Profile picture of Hans Burger"
                              loading="lazy"
                            />
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p className="font-semibold">Catching Fire</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">Suzzane Collins</td>
                      <td className="px-4 py-3 text-xs">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Adventure
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm">9/1/2013</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}