"use client";
import { useState, useRef, useEffect } from "react";
import { X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
export default function Sidebar() {
  const [open, setOpen] = useState(false);
const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
const toggleTheme = () => {
  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
};
  
  const sidebarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <>
      {/* Hamburger button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className=" xl:hidden text-3xl font-bold p-2 text-gray-800 dark:text-white"
        >
          ☰
        </button>
      )}
      {/* Sidebar Dialog */}
      {open && (
        <div
          role="dialog"
          ref={sidebarRef}
          className="fixed z-50 inset-y-0 right-0 w-3/4 sm:max-w-sm bg-white dark:bg-gray-900 p-6 shadow-lg transition-all"
        >
          {/* Close Button */}

          <button
            onClick={() => setOpen(false)}
            className="dark:text-white border-2 border-black dark:border-gray-500 rounded-lg right-4 text-gray-700 hover:text-black dark:hover:text-white absolute top-4 "
          >
            <X className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>

          {/* Title */}
          <div className="text-center sm:text-left mb-12">
            <h2 className="text-lg font-semibold">Discussion Hub</h2>
          </div>

          {/* Nav Links */}
          {["Home","About","Quiz", "Discussions", "Private Discussions",  ].map((item) => {
  const route =
    item === "Home"
      ? "/"
      : item === "Private Discussions"
      ? "/privateDiscussions"
      : `/${item.toLowerCase()}`;

            return (
              <li  className='list-none my-16 dark:text-white' key={item}>
                <Link href={route} onClick={() => setOpen(false)}>
                  <button className="w-full text-left">{item}</button>
                </Link>
              </li>
            );
          })}

          {/* Footer */}
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/login">
              <button className=" dark:text-white border-none border px-4 py-2 rounded">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="dark:text-white border-none border px-4 py-2 rounded">
                Signup
              </button>
            </Link>
            <button
              onClick={toggleTheme}
              className="dark:text-white border-none border p-2 rounded"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "light" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
