import React from 'react';

export const Container = ({
   animationDuration,
   children,
   isFinished,
}: {
   animationDuration: number;
   children: React.ReactNode;
   isFinished: boolean;
}) => (
   <div
      className='pointer-events-none'
      style={{
         opacity: isFinished ? 0 : 1,
         transition: `opacity ${animationDuration}ms linear`,
      }}
   >
      {children}
   </div>
);
