import { create } from 'zustand'

interface MilesStore {
  // radius: 40000 | 32187 | 24140 | 16093 | 8047;
  radius: number;
  changeRadius: (newRadius: number) => void;

}

export const useMilesStore = create<MilesStore>((set) => ({
  radius: 5,
  changeRadius: (newRadius) => set({ radius: newRadius }),
}))