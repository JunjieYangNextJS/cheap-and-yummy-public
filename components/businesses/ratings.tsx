"use client";

import { Star } from "lucide-react";
import React from "react";

export default function Ratings({ rating }: { rating: number }) {
  const divs = [];

  for (let i = 1; i <= rating; i++) {
    divs.push(
      <div
        key={i}
        className="flex items-center justify-center h-5 w-5 bg-orange-400 rounded-sm"
      >
        <Star size="15" color="white" fill="white" />
      </div>
    );
  }

  if (!Number.isInteger(rating)) {
    divs.push(
      <div
        key={0.5}
        className="flex items-center justify-center h-5 w-5 bg-gradient-to-r from-amber-500 to-70% rounded-sm"
      >
        <Star size="15" color="white" fill="white" />
      </div>
    );
  }

  return <>{divs}</>;
}
