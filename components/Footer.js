"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  const hideFooter1 = pathname.startsWith("/discussions");
  const hideFooter2 = pathname.startsWith("/groups/");
  const hideFooter3 = pathname.startsWith("/private/");
  const hideFooter4 = pathname.startsWith("/solveQuiz/");
  const hideFooter5 = pathname.startsWith("/quiz");
// const showFooter=["/discussions","/groups/","private/","solveQuiz/","/quiz"].includes(pathname)
  if (hideFooter1) return null;
  if (hideFooter2) return null;
  if (hideFooter3) return null;
  if (hideFooter4) return null;
  if (hideFooter5) return null;
  return (
    <>
    
    <footer className="dark:bg-slate-800 dark:text-white text-slate-700  bg-slate-200 py-16 pl-6 sm:pl-12 md:pl-32">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-20">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold ">Programmers Hub</h2>
          <p className="mt-2 ">
            Building a global community for developers to learn, share, and
            collaborate.
          </p>
        </div>
        <div>
          <h3 className=" font-semibold mb-2">Quick Links</h3>
          <ul className=" flex flex-col gap-6 space-y-1">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/discussions" className="hover:underline">
                Discussions
              </Link>
            </li>
            <li>
              <Link href="/privateDiscussions" className="hover:underline">
                Private Discussions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold mb-2">Follow Us</h3>
          <div className="flex flex-col gap-9 ">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-slate-700 dark:text-white  hover:text-slate-950"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-slate-700 dark:text-white  hover:text-slate-950"
            >
              <FaTwitter size={20} />
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-slate-700 dark:text-white  hover:text-slate-950"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center  h-6 text-xs mt-8 text-gray-500 dark:text-white">
        &copy; {new Date().getFullYear()} Programmers Discussion Hub. All rights
        reserved.
      </div>
    </footer>
    
    </>
  );
};

export default Footer;
