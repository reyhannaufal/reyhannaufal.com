import create, { SetState } from 'zustand';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useProgressStore = create((set: SetState<any>) => {
   return {
      isAnimating: false,
      setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
   };
});
``;
