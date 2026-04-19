'use client';
import React from 'react';
import Link from 'next/link';
import ChatSidebar from './ChatSidebar';
import { useSearch } from '@/context/SearchContext';

const StickyBar = () => {
  const { searchQuery } = useSearch();

  return (
    <>
    <div className=" hidden md:block scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent h-[calc(100vh-8.5vh)] border xl:w-[21%] lg:w-[25%] md:w-[30%] w-full dark:bg-gray-900 dark:border-blue-400 p-2 sm:p-4 overflow-y-auto dark:text-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white md:text-left text-center ">Public Discussions</h2>
      <ul className=" text-md space-y-4">
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

          const slug = lang.toLowerCase().replace(/\+/g, 'plus').replace(/\./g, '').replace(/\s/g, '');

          return (
            <li key={lang}>
              <Link href={`/groups/${slug}`}>
                <button className="w-full md:bg-white bg-blue-50 rounded border md:border-none  px-4 py-3 hover:bg-blue-100 dark:bg-gray-800 dark:hover:bg-gray-700 hover:rounded hover:shadow text-center">
                  {lang} 
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
    <ChatSidebar/>
    </>
  );
};

export default StickyBar;
