"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useSearch } from '@/context/SearchContext';

const PrivateChatSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [privateGroups, setPrivateGroups] = useState([]);
  const sidebarRef = useRef();
  const { data: session } = useSession();
const { searchQuery } = useSearch();
  useEffect(() => {
    if (!session?.user?.email) return;

    const q = query(
      collection(db, "privateGroups"),
      where("members", "array-contains", session.user.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const groups = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPrivateGroups(groups);
    });

    return () => unsubscribe();
  }, [session?.user?.email]);
const handleCreatePrivateGroup = async () => {
    if (!session?.user) {
      alert("You must be logged in to create a private discussion.");
      return;
    }

    const groupName = prompt("Enter a name for your private discussion:");
    if (!groupName) return;

    if (groupName.length > 20) {
      alert("Group name must be 20 characters or less.");
      return;
    }
if (groupName.length === 0) {
      alert("Group name must be at least one character.");
      return;
    }

    try {
      const res = await fetch("/api/private/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name: groupName }),
      });
      const data = await res.json();

      if (res.ok) {
        setIsOpen(false);
        window.location.href = `/private/${encodeURIComponent(data.groupId)}`;
      } else {
        alert("Error: " + data.error);
      }
    } catch (e) {
      console.error(" Error creating group:", e);
      alert("Failed to create group. Try again.");
    }
  };



  return (
    <>
      {/* Toggle Button */}
      {!isOpen && (
        <div
          className="md:hidden dark:bg-black bg-[#e2e8f0] h-[673px] flex justify-center"
          onClick={() => setIsOpen(true)}
        >
          <div className="cursor-pointer h-[55px] text-xl p-[12px] text-black dark:text-white hover:bg-[#c4cad2]">
            ☰
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isOpen && (
        <>
          <div
            className="md:hidden dark:bg-black bg-[#e2e8f0] h-[673px] flex justify-center"
            onClick={() => setIsOpen(true)}
          >
            <div className="cursor-pointer h-[55px] text-xl p-[12px] text-black dark:text-white hover:bg-[#c4cad2]">
            ☰
            </div>
          </div>

          <div
            ref={sidebarRef}
            className="fixed z-50 md:hidden bg-[#e2e8f0] dark:bg-black dark:border-l dark:border-blue-700 w-[43%] h-full shadow-lg p-2 transition-all duration-300 ease-in-out text-black dark:text-white text-[15px]"
          >
            {/* Close Button */}
            <div className="flex items-center sm:gap-20 gap-6 mb-2 sm:mb-4">
              <h2 className="text-lg font-bold text-gray-800 dark:text-white md:text-left">
                Private Discussions
              </h2>
              <button
                className="text-xl text-black dark:text-white py-[2px] border-2 border-black dark:border-white rounded-lg px-1"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          <button
            onClick={handleCreatePrivateGroup}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-2 rounded mb-4 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            + Create Private Discussion
          </button>
            <div className="scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent h-full overflow-y-auto">
              <ul className="space-y-4">
                      {privateGroups.length > 0 ? (
          privateGroups.filter((group) =>
    group?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  ).map((group) => (
            
            <li className="" key={group.id}>
              <Link className="w-full" href={`/private/${group.id}`}>
                <button className="w-full  bg-blue-50 rounded border md:border-none text-left px-2 py-3 hover:bg-blue-200 dark:bg-gray-800 dark:hover:bg-gray-700 hover:rounded hover:shadow">
{group?.name || "Unnamed Group"}
                </button>
              </Link>
              
            </li>
          ))
        ) : (
          <p className="mt-6 ml-4 text-sm text-gray-500 ">No private discussions yet.</p>
        )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PrivateChatSidebar;
