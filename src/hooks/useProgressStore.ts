import create, { SetState } from 'zustand';

export const useProgressStore = create((set: SetState<any>) => {
   return {
      isAnimating: false,
      setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
   };
});
``;
