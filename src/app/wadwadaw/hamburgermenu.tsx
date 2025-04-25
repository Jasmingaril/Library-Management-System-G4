'use client'

import {useState} from 'react';

export default function Hamburgermenu(){
    const [setOpen, setisOpen] = useState(false);
    const toggleNavbar = () => {
        setisOpen(!setOpen)
    }
    return (
        <>
        <h1></h1>













        {/*<div className="p-[2rem] relative">
            <button onClick={() => setisOpen(!setOpen)} className="ml-auto relative hover:cursor-pointer mt-2">
                <div className='flex p-[1rem]'>
                    <span className={`h-[2px] w-[100%] bg-white rounded-[25px] absolute top-[50%] left-[50%] ${setOpen ? 'transform -rotate-45 transition duration-150 ease-in':""}`}></span>
                    <span className={`h-[2px] w-[100%] bg-white rounded-[25px] absolute top-[25%] left-[50%] ${setOpen ? 'transform rotate-45 translate-y-2 transition duration-150 ease-in':""} `}></span>
                </div>
                </button>
                </div>*/}
            



        </>
    );
}