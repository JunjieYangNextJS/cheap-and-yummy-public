import { create } from 'zustand'



interface MapStore {
  // radius: 40000 | 32187 | 24140 | 16093 | 8047;
  isOpen: boolean;
  onToggle: () => void;
  lat: number;
  lng: number;
  onChangeLocation: (newLat: number, newLng: number) => void;
  locationName: string;
  onChangeLocationName: (name: string) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({isOpen: !state.isOpen})),
  lat: 30.267153,
  lng: -97.743057,
  onChangeLocation: (newLat, newLng) => set({lat: newLat, lng: newLng}),
  locationName: "Central Austin",
  onChangeLocationName: (name) => set({locationName: name})
}))