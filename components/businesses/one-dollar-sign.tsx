"use client";

import useBusinessQuery from "@/hooks/use-business-query";
import DollarSign from "./dollar-sign";
import { useMapStore } from "@/hooks/use-map-store";
import { useMilesStore } from "@/hooks/use-miles-store";
import { useOpenNowStore } from "@/hooks/use-openNow-store";

export function OneDollarSign({ price }: { price: number }) {
  const latitude = useMapStore((state) => state.lat);
  const longitude = useMapStore((state) => state.lng);
  const radius = useMilesStore((state) => state.radius);
  const isOpenNow = useOpenNowStore((state) => state.isOpenNow);

  const {
    isPending,

    data: restaurants,
  } = useBusinessQuery(price, radius, latitude, longitude, isOpenNow);

  return (
    <DollarSign
      restaurants={restaurants}
      pageSign="$"
      pageDescription="Food or drinks usually cost $10 and under."
      pageTitle="Inexpensive"
      isPending={isPending}
    />
  );
}
