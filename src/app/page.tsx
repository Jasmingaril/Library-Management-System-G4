import Head from "next/head";

{/*REACT IMPORTS */}
import Link from "next/link";


{/*FONT IMPORTS */}
import { Noto_Sans_JP } from "next/font/google";
import { Geologica } from "next/font/google";
import React from "react";

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
        <title>IIIIIIIIIIIIIIIIIII</title>
      </Head>
      <main className="flex flex-col min-h-screen min-w-screen">
        <div className="flex justify-center items-center min-h-screen min-w-screen bg-red-900 lg:justify-between lg:p-20 lg:items-start">

          {/*THIS BUNCH OF DIVS AND SPANS SHOULD DISAPPEAR STARTING FROM SM TO MD SCREEN SIZE AND SHOULD ONLY APPEAR IN LG */}
          <div className="lg:flex lg:justify-start lg:flex-col sm:hidden md:hidden">
            <div className="lg:flex lg:flex-row">
              <span className="text-white text-8xl">L</span>
              <span className="text-white text-8xl">I</span>
              <span className="text-white text-8xl">B</span>
              <span className="text-white text-8xl">R</span>
              <span className="text-white text-8xl">A</span>
              <span className="text-white text-8xl">R</span>
              <span className="text-white text-8xl">Y</span>
            </div>
            <div className="lg:flex lg:flex-row lg:pt-20">
              <span className="text-white text-8xl">M</span>
              <span className="text-white text-8xl">A</span>
              <span className="text-white text-8xl">N</span>
              <span className="text-white text-8xl">A</span>
              <span className="text-white text-8xl">G</span>
              <span className="text-white text-8xl">E</span>
              <span className="text-white text-8xl">M</span>
              <span className="text-white text-8xl">E</span>
              <span className="text-white text-8xl">N</span>
              <span className="text-white text-8xl">T</span>
            </div>
            <div className="lg:flex lg:flex-row lg:pt-20">
              <span className="text-white text-8xl">S</span>
              <span className="text-white text-8xl">Y</span>
              <span className="text-white text-8xl">S</span>
              <span className="text-white text-8xl">T</span>
              <span className="text-white text-8xl">E</span>
              <span className="text-white text-8xl">M</span>
            </div>
          </div>



          <div className={`${notonansjp.variable} w-90 h-120 bg-white px-7 rounded-2xl mt-7.5`}>
            <div className="flex justify-between items-center py-5">
              {/*logo is here */}
              <div className="w-15 h-15">
                <img src="https://cdn.bulan.sorsu.edu.ph/images/ssu-logo.webp" alt="sorlogo"/>  
              </div>
              <h2 className="pr-5 font-bold text-black font-notosansjp">Sorsogon State University <br /><p className="font-notosansjp pl-10">Bulan Campus</p></h2>
            </div>
            <div className=" pb-5 flex justify-center items-center">
              <p className=" text-black/80 lg:hidden ">Library Management System</p>
            </div>
            <div className=" flex justify-center items-center">
              <span>L</span>
              <span>O</span>
              <span>G</span>
              <span>I</span>
              <span>N</span>
            </div>

            {/* the form will start here */}
            <form action="" className="">
              <span className="text-black">Username:</span>
              <div className="mb-7">
                <input type="text" placeholder=" Username" className="border border-black/15 bg-gray-100 rounded-2xl w-75 h-10 px-2.5" />
              </div>
              <span className="text-black">Password:</span>
              <div className="mb-7">
                <input type="password" placeholder=" Password" className="border bg-gray-100 black border-black/15 rounded-2xl w-75 h-10 px-2.5" />
              </div>
              <div className="flex justify-center items-center pb-1">
                <button className="cursor-pointer bg-blue-700 h-10 px-10 rounded-4xl text-white font-notosansjp active:opacity-45 hover:transition-all hover:delay-300 hover:px-20">Login</button>
              </div>
            </form>
            <h6 className="pt-1">Don&apos;t have account?<a href="" className="pl-3 underline">Register?</a></h6>
          </div>
        </div>































        {/*<div className={`${geologica.variable}`} style={{ backgroundColor: 'rgb(227, 212, 185)' }}>
          <div className="py-7 items-center min-h-screen bg-white">

            <div className="flex justify-between bg-transparent pt-55 pl-13 lg:pl-25s">
              <div className="grid col-start bg-transparent pb-0">
                <h1 className="font-bold font-geologica text-gray-800 text-4xl">SorSU</h1>
                <h2 className=" font-bold font-geologica text-gray-800 text-4xl">Online Library System</h2>
              </div>
            </div>
            <div className="bg-transparent mt-8 ml-13 mr-100">
              <Link href={"/items"} className="bg-red-900 text-white py-2 px-10 rounded-full hover:px-12 transition-all hover:duration-100 active:opacity-50 font-geologica">Browse</Link></div>
          </div>  
        </div>
        <div>
        </div>*/}
      </main>
    </>
  );
}
