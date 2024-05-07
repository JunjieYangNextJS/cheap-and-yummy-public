"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { OneDollarSign } from "./one-dollar-sign";

import { TwoDollarSigns } from "./two-dollar-signs";

export default function DollarTabs() {
  const [price, setPrice] = useState(1);

  return (
    <div className="h-full px-4 py-6 lg:px-8">
      <Tabs defaultValue="$" className="h-full space-y-6">
        <div className="space-between flex items-center">
          <TabsList>
            <div onClick={() => setPrice(1)}>
              <TabsTrigger value="$" className="relative">
                $
              </TabsTrigger>
            </div>
            <div onClick={() => setPrice(2)}>
              <TabsTrigger value="$$">$$</TabsTrigger>
            </div>
          </TabsList>
        </div>
        <OneDollarSign price={price} />

        <TwoDollarSigns price={price} />
      </Tabs>
    </div>
  );
}
