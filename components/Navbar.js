'use client';
import React, { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon } from 'lucide-react';
import { SunIcon } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useSearch(); 
  
  useEffect(() => {
    setMounted(true);
  }, []);
const toggleTheme = () => {
  setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
};


const handleKeyDown = async (e) => {
  if (e.key === 'Enter' && searchQuery.trim() !== '') {
    try {
      const res = await fetch('/api/findGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchQuery }),
      });

      const result = await res.json();

      if (result.type === 'private') {
        router.push(`/private/${result.id}`);
      } 
      
      else if(result.type === 'public'){
        router.push(`/groups/${result.id}`);
      }
    } catch (err) {
      

    }
  }
};




  return (
    <nav className="bg-white text-black dark:text-white dark:bg-black w-full sm:h-[55px] xl:pt-2 pt-[2px] z-20 top-0 start-0 border-b border-gray-200 dark:border-blue-700 ">
     <div className=" sm:mx-4 mx-1 flex items-center justify-between">
      <div className='flex items-center gap-2'>
  {/* LOGO */}
  <Link href="/" className=" flex items-center ">
    <img src="/logo.jpg" className=" mx-3 sm:h-12 h-9 dark:hidden" alt="pdh Logo" />
    <span className="hidden text-sm sm:block dark:block sm:text-xl font-bold dark:text-white">
      <span className=" dark:hidden font-semibold font-poppins">&lt;/&gt;</span> Discussion Hub
    </span>
  </Link>
{/* Desktop Nav Links */}
    <div className="hidden xl:block">
      <ul className="text-center flex space-x-2 text-md font-medium text-black-700 dark:text-white">
        <li><Link href="/" className=" hover:bg-slate-100 rounded-full p-3 dark:hover:bg-black">Home</Link></li>
        <li><Link href="/about" className=" hover:bg-slate-100 rounded-full p-3 dark:hover:bg-black">About</Link></li>
        <li><Link href="/quiz" className=" hover:bg-slate-100 rounded-full p-3 dark:hover:bg-black">Take Quiz</Link></li>
        <li><Link href="/discussions" className="hover:bg-slate-100 rounded-full p-3 dark:hover:bg-black">Discussions</Link></li>
        <li><Link href="/privateDiscussions" className=" hover:bg-slate-100 rounded-full p-3 dark:hover:bg-black">Private Discussions</Link></li>
      </ul>
    </div>
    </div>
  {/* RIGHT SIDE WRAPPER */}
  <div className="flex items-center gap-3">
    

    {/* Search Bar (Desktop) */}
    <div className="dark:text-white flex relative items-center">
      <input
        className="w-44 px-4 pr-10 text-xs py-2 rounded-md bg-slate-200 dark:bg-zinc-700 sm:w-60"
      placeholder={`${(
  pathname.startsWith("/privateDiscussions"))
    ? "Search Private groups.."
    : "Search Groups.."
}`}


      onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}

        type="text"
      />
      <span className="absolute right-2 px-2 py-1 text-xs bg-slate-200 dark:bg-zinc-700 rounded-md border border-zinc-300 dark:border-zinc-700 flex items-center gap-1">
        <kbd className="font-mono text-xs">⌘</kbd>
        <kbd className="font-mono text-xs">K</kbd>
      </span>
    </div>

    {/* Buttons */}
    <div className="dark:text-white hidden xl:flex items-center gap-2">
      <Link href="/login" className=" dark:hover:bg-black dark:border-none px-4 py-2 border rounded-md text-sm hover:bg-slate-50 ">Login</Link>
      <Link href="/signup" className=" dark:hover:bg-black  dark:border-none px-4 py-2 border rounded-md text-sm hover:bg-slate-50 text-accent-foreground">Signup </Link>
      {mounted&&(
      <button onClick={toggleTheme} className=" dark:hover:bg-black  dark:border-none h-9 w-9 flex items-center hover:bg-slate-50 justify-center border rounded-md">
        {resolvedTheme === 'light' ? (
        <SunIcon/> ): (<MoonIcon/>) }
      </button>)}
    </div>
<Sidebar/>
  </div>
</div>
    </nav>
  );
};

export default Navbar;
