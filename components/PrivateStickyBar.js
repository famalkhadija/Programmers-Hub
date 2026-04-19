'use client';
import { useRouter } from "next/navigation";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import PrivateChatSideBar from './PrivateChatSideBar';
import { useSearch } from '@/context/SearchContext';

const PrivateStickyBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [privateGroups, setPrivateGroups] = useState([]);
const { searchQuery } = useSearch();

  useEffect(() => {
    if (!session?.user?.uid) return;

    const q = query(
      collection(db, 'privateGroups'),
      where('members', 'array-contains', session.user.email)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const groups = snapshot.docs.map(doc => {
  const data = doc.data();
  return {
    id: doc.id,
    ...data,
  };
});

      setPrivateGroups(groups);
    });

    return () => unsubscribe();
  }, [session?.user?.uid]);

const handleCreatePrivateGroup = async () => {
  try {
    if (!session || !session.user) {
      alert("You must be logged in to create a private discussion.");
      return;
    }

    const groupName = prompt("Enter a name for your private discussion:");
    if (groupName.length > 20) {
  alert("Group name must be 20 characters or less.");
  return;
}
    if (groupName.length ===0) {
  alert("Group name must be at least one character");
  return;
}
    if (!groupName) return;

    const res = await fetch("/api/private/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name: groupName }),
    });

    const data = await res.json();

    if (res.ok) {
router.push(`/private/${encodeURIComponent(data.groupId)}`);
    } else {
      alert("Error: " + data.error);
    }
  } catch (e) {
    console.error(" Error creating private group:", e);
    alert("Failed to create discussion. Please try again.");
  }
};




  return (
    <>
    <div className="hidden md:block scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent h-[calc(100vh-8.5vh)] border xl:w-[21%] lg:w-[25%] md:w-[30%] w-full dark:bg-gray-900 dark:border-blue-400 p-2 sm:p-4 overflow-y-auto dark:text-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white md:text-left text-center">
        Private Discussions
      </h2>

<button onClick={handleCreatePrivateGroup } className='w-full flex items-center gap-2 hover:bg-blue-200 rounded-full mb-3 p-2 dark:hover:bg-black cursor-pointer'><span className='text-2xl'>+</span><span >Create Discussion</span>
</button>
      <ul className="text-md space-y-4">
        {privateGroups.length > 0 ? (
          privateGroups.filter((group) =>
    group?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  )
  .map((group) => (
            
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
<PrivateChatSideBar/>
    </>
  );
};

export default PrivateStickyBar;
