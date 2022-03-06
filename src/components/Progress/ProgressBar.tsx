import React from 'react';

export const Bar = ({ animationDuration, progress }: any) => (
   <div
      className='fixed top-0 left-0 z-50 h-[4px] w-full rounded-sm bg-primary'
      style={{
         marginLeft: `${(-1 + progress) * 100}%`,
         transition: `margin-left ${animationDuration}ms linear`,
      }}
   ></div>
);
