"use client";

import useBusinessQuery from "@/hooks/use-business-query";
import DollarSign from "./dollar-sign";
import { useMapStore } from "@/hooks/use-map-store";
import { useMilesStore } from "@/hooks/use-miles-store";
import { useOpenNowStore } from "@/hooks/use-openNow-store";

export function TwoDollarSigns({ price }: { price: number }) {
  const lat = useMapStore((state) => state.lat);
  const lng = useMapStore((state) => state.lng);
  const radius = useMilesStore((state) => state.radius);
  const isOpenNow = useOpenNowStore((state) => state.isOpenNow);

  const {
    isPending,

    data: restaurants,
  } = useBusinessQuery(price, radius, lat, lng, isOpenNow);

  return (
    <DollarSign
      restaurants={restaurants}
      pageSign="$$"
      pageDescription="Food or drinks usually cost between $10 - $25."
      pageTitle="Moderately Expensive"
      isPending={isPending}
    />
  );
}
