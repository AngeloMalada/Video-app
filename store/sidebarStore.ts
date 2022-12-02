import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface HamburgerState {
  isHamburgerOpen: boolean;
  toggleHamburger: () => void;
  openHamburger: () => void;
  closeHamburger: () => void;
}

export const useHamburgerStore = create<HamburgerState>()(
  devtools(
    (set) => ({
      isHamburgerOpen: false,
      toggleHamburger: () =>
        set((state) => ({ isHamburgerOpen: !state.isHamburgerOpen })),
      openHamburger: () => set({ isHamburgerOpen: true }),
      closeHamburger: () => set({ isHamburgerOpen: false }),
    }),
    {
      name: "hamburger-storage",
    }
  )
);
