import React from 'react';
import { useNProgress } from '@tanem/react-nprogress';

import { Bar } from './ProgressBar';
import { Container } from './ProgressContainer';

export const Progress = ({ isAnimating }: { isAnimating: boolean }) => {
   const { animationDuration, isFinished, progress } = useNProgress({
      isAnimating,
   });

   return (
      <Container animationDuration={animationDuration} isFinished={isFinished}>
         <Bar animationDuration={animationDuration} progress={progress} />
      </Container>
   );
};
