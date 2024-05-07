"use client";

import React from "react";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import BusinessCard from "./business-card";
import { Loader2 } from "lucide-react";

interface DollarSignProps {
  restaurants: Business[];
  pageTitle: string;
  pageDescription: string;
  pageSign: "$" | "$$";
  isPending: boolean;
}

export default function DollarSign({
  restaurants,
  pageTitle,
  pageDescription,
  pageSign,
  isPending,
}: DollarSignProps) {
  return (
    <TabsContent value={pageSign} className="border-none p-0 outline-none">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">{pageTitle}</h2>
          <p className="text-sm text-muted-foreground">{pageDescription}</p>
        </div>
      </div>
      <Separator />
      <div className="relative">
        {isPending ? (
          <div className="flex flex-col flex-1 justify-center items-center">
            <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Loading...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2">
            {restaurants?.map((business: Business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        )}
      </div>
    </TabsContent>
  );
}
