import { create } from 'zustand'


interface IsOpenNowStore {
 
  isOpenNow: boolean;
  toggleIsOpenNow: () => void;

}

export const useOpenNowStore = create<IsOpenNowStore>((set) => ({
  isOpenNow: true,
  toggleIsOpenNow: () => set((state) => ({isOpenNow: !state.isOpenNow}))
  
}))