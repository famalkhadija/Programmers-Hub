"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useSearch } from '@/context/SearchContext';

const ChatSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();
const { searchQuery } = useSearch();
  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <div
          className=" md:hidden dark:bg-black bg-[#e2e8f0] h-[673px] flex justify-center"
          onClick={() => setIsOpen(true)}
        >
          <div className="text-black cursor-pointer h-[55px] text-xl p-[12px] dark:text-white hover:bg-[#c4cad2] ">
            ☰
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isOpen && (
        <>
              <div
          className=" md:hidden dark:bg-black bg-[#e2e8f0] h-[673px] flex justify-center"
          onClick={() => setIsOpen(true)}
        >
          <div className="cursor-pointer h-[55px] text-xl p-[12px] text-black dark:text-white hover:bg-[#c4cad2] ">
            ☰
          </div>
        </div>
        <div
          ref={sidebarRef}
          className="fixed z-50 md:hidden bg-[#e2e8f0] dark:bg-black dark:border-l dark:border-blue-700 w-[43%] h-full shadow-lg p-2 transition-all duration-300 ease-in-out text-black dark:text-white text-[15px]"
        >
          {/* Close Button */}
          <div className=" flex items-center sm:gap-20 gap-6 mb-2 sm:mb-4">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white md:text-left ">
              Public Discussions
            </h2>
            <button
              className="text-xl text-black dark:text-white py-[2px] border-2 border-black dark:border-white rounded-lg px-1 "
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent h-full overflow-y-auto">
            <ul className=" space-y-4">
              {[
                "JavaScript",
                "TypeScript",
                "Java",
                "Python",
                "PHP",
                "C++",
                "C",
                "C#",
                "Dart",
                "HTML",
                "CSS",
                "Go",
                "Rust",
                "Kotlin",
                "Swift",
                "Ruby",
                "Shell",
                "R",
                "SQL",
                "Haskell",
                "Scala",
                "Elixir",
                "Lua",
            ].filter((lang) =>
  lang.toLowerCase().includes(searchQuery.toLowerCase())
).map((lang) => {

                const slug = lang
                  .toLowerCase()
                  .replace(/\+/g, "plus")
                  .replace(/\./g, "")
                  .replace(/\s/g, "");

                return (
                  <li key={lang}>
                    <Link href={`/groups/${slug}`}>
                      <button className="w-[97%] md:bg-white bg-blue-50 rounded border md:border-none px-4 py-3 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:rounded hover:shadow text-center">
                        {lang} 
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default ChatSidebar;
