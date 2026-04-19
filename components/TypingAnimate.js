'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function TypingAnimate() {
  return (
    <div className=" h-[115px] text-center p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
        <Typewriter
          words={[
            'Where Coders Connect & Collaborate',
            'Explore. Share. Grow together as developers',
            'A Community for Every Line of Code',
            'Code, Connect, Conquer'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={2000}
        />
      </h2>
    </div>
  );
}
