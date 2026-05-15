"use client";
import React, { useState } from 'react';
import TypingAnimate from "@/components/TypingAnimate";
export default function Home() {
  return (
    <>
      <div className=" text-black dark:text-white flex">
        <div className="relative w-full">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: "url('/hero.jpg')" }}
          ></div>
          <div
            className="absolute inset-0 bg-slate-400 dark:bg-slate-950
bg-opacity-50 dark:bg-opacity-80"
          ></div>
          {/* Content */}
          <div className=" relative flex flex-col h-full mt-5 py-12 px-4 ">
            <div className=" w-[190px] mx-auto text-center pb-2 bg-[rgba(203,234,245,0.2)]  rounded-full mb-16 backdrop-blur-sm">
              <span className="text-sm font-medium dark:text-white">
                {" "}
                <span className="text-2xl">“</span>Ask. Answer. Advance.
                <span className="text-2xl">”</span>
              </span>
            </div>
            <h1 className=" md:text-6xl text-3xl text-center font-bold">
              Welcome to Programmers Hub
            </h1>

            <div className="space-y-2 text-center">
              <TypingAnimate />
              <p className=" md:w-[50%] mx-auto text-center text-sm md:text-lg">
                Welcome to the ultimate playground for coders — where ideas
                spark, bugs vanish, and knowledge grows with every line of code.
                Join passionate developers, share what you know, ask what you
                don&apos;t, and level up your skills in a community that codes
                together and grows together. Whether you&apos;re a beginner or a
                seasoned pro, this is your space to learn, teach, and tackle
                challenges together. Dive into discussions, solve quizzes, and
                collaborate on real code — all in one hub
              </p>
              <div className="pt-16 flex flex-wrap justify-center gap-4">
                <a href="/discussions">
                  <button className="
                  dark:bg-black 
                  dark:hover:bg-white hover:bg-white hover:text-black bg-slate-800 text-white shadow h-10 rounded-md px-8 ">
                    Start Now
                  </button>
                </a>
                <a href="/quiz">
                  <button className="  bg-slate-500 text-white shadow-sm hover:bg-white hover:text-black h-10 rounded-md px-8 ">
                    Solve Quiz
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
