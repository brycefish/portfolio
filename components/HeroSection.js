"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import devpic from "/public/headshot.jpg"
// import AiOutlineLinkedin from "react-icons/ai"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
    return (
        <section id="home">
        <div className="dark:text-slate-50 flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">

        <div className="md:mt-2 md:w-1/2">
          <Image src={devpic} className="shadow-2xl rounded-full" width="300" height="300"/>
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mb-3 mt-6 md:mt-0 md:text-7x1">Hi, I&#39;m Bryce</h1>
          <p>
          I&#39;m a{" "}
          <span className="font-semibold text-teal-500">
              Software Developer{" "}
            </span>
            based in Boise, Idaho. Committed to creating quality apps that make life easier.
          </p>
          <div className="mt-10 flex-center space-x-10 self">
          <Link href="#projects" className="text-neutral-100 font-semibold px-6 py-3 bg-teal-700 dark:bg-teal-600 rounded shadow hover:bg-teal-700">
          Projects
          </Link>
          <Link href="https://www.linkedin.com/in/bryce-fish" target="_blank" className="text-neutral-100 font-semibold px-6 py-3 bg-teal-700 dark:bg-teal-600 rounded shadow hover:bg-teal-700">
          LinkedIn
          </Link>
          </div>
        </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center ">
        
          <HiArrowDown size={35} />
      </div>
        </section>
    )
};
export default HeroSection