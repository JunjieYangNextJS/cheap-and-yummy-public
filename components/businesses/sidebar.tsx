"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useMilesStore } from "@/hooks/use-miles-store";
import { useMapStore } from "@/hooks/use-map-store";
import { useOpenNowStore } from "@/hooks/use-openNow-store";
import { Input } from "../ui/input";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const miles: number[] = [3, 5, 7, 10, 15];

  const radius = useMilesStore((state) => state.radius);

  const changeRadius = useMilesStore((state) => state.changeRadius);

  const changeMapOpen = useMapStore((state) => state.onToggle);

  const changeOpenNow = useOpenNowStore((state) => state.toggleIsOpenNow);

  const isOpen = useMapStore((state) => state.isOpen);
  const locationName = useMapStore((state) => state.locationName);
  const isOpenNow = useOpenNowStore((state) => state.isOpenNow);

  const handleClickMap = () => {
    changeMapOpen();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scroll
    });
  };

  const handleClickMiles = (item: number) => {
    changeRadius(item);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scroll
    });
  };

  return (
    <div className={cn("pb-12 ", className)}>
      <div className="space-y-10 py-14 sticky top-0">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            <div className="flex flex-col gap-2">
              <div>
                At{" "}
                <span
                  className="underline text-orange-400 ml-1 cursor-pointer"
                  onClick={handleClickMap}
                >
                  {locationName}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  onClick={handleClickMap}
                  checked={isOpen}
                  id="open-now"
                  className="bg-orange-400"
                />
                <Label htmlFor="open-now">Map</Label>
              </div>
              <div className="flex items-center space-x-2 mt-14">
                <Switch
                  onClick={changeOpenNow}
                  checked={isOpenNow}
                  id="open-now"
                  className="bg-orange-400"
                />
                <Label htmlFor="open-now">Now Open</Label>
              </div>
            </div>
          </h2>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Distance
          </h2>
          <div className="space-y-1">
            {miles.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className={cn(
                  "w-full justify-start hover:bg-gray-300",
                  item === radius && "font-extrabold"
                )}
                onClick={() => handleClickMiles(item)}
              >
                {item} miles
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
