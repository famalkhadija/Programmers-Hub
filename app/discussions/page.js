import React from 'react'
import StickyBar from '@/components/StickyBar'
export const metadata = {
  title: "Discussions | Programmers Discussion Hub",
  description: "Join programming discussions and solve coding problems",
};
const discussions = () => {
  return (
    <div>
      <div className="flex text-black bg-white dark:bg-[#111827] ">
      <StickyBar/>
      <div className=' dark:text-white flex flex-col justify-center items-center mx-auto'>
        <div className='dark:text-white text-gray-700 text-xl'>Programmers Discussion Hub</div>
        <div className=' dark:text-white mt-2 text-gray-500'>Jump into your favorite tech stack!</div>
        <div className=' dark:text-white text-gray-500'>Ask. Answer. Advance.</div>
        </div>
      </div>
    </div>
  )
}

export default discussions
