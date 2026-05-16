import React from 'react'
import PrivateStickyBar from '@/components/PrivateStickyBar'
export const metadata = {
  title: "Private Discussions | Programmers Discussion Hub",
  description: "Join private programming discussions and groups",
};
const privateDiscussions = () => {
  return (
    <div>
      <div className="flex bg-white dark:bg-[#111827] ">
      <PrivateStickyBar/>
      <div className=' text-center flex flex-col justify-center items-center mx-auto'>
        <div className='dark:text-white text-gray-700 text-xl'>Programmers Discussion Hub</div>
        <div className=' mt-2 dark:text-white text-gray-500'>Private Discussions are here — talk freely with selected members.</div>
        <div className='  dark:text-white text-gray-500'>Ask. Answer. Advance.</div>
        </div>
      </div>
    </div>
  )
}

export default privateDiscussions
