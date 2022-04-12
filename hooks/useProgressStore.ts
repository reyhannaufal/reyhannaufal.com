import create from 'zustand';

export interface ProgressStore {
   isAnimating: boolean;
   setIsAnimating: (isAnimating: boolean) => void;
}

export const useProgressStore = create<ProgressStore>((set) => {
   return {
      isAnimating: false,
      setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
   };
});
