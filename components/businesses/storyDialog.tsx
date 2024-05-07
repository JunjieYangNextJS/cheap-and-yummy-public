"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";

export default function StoryDialog() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Access localStorage
      const isStoryRead = localStorage.getItem("isStoryRead");
      setOpen(!isStoryRead);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("isStoryRead", "true");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        style={{ minWidth: "35%", padding: "25px 30px" }}
      >
        <DialogHeader>
          <DialogTitle
            style={{
              fontSize: 24,
              marginBottom: 12,
              display: "flex",
              justifyContent: "center",
            }}
          >
            The Story Behind &quot;Cheap & Yummy&quot;
          </DialogTitle>
          <DialogDescription
            className="mb-2"
            style={{ color: "black", fontSize: "16px", lineHeight: 1.4 }}
          >
            &ensp; The idea for &quot;Cheap & Yummy&quot; came during my road
            trip from San Francisco to Austin, spending 25 hours on highway.
            Along the way, I encountered the familiar traveler&apos;s challenge:
            how to find delicious, affordable meals while on the move.
          </DialogDescription>
          <DialogDescription
            className="mb-2"
            style={{ color: "black", fontSize: "16px", lineHeight: 1.4 }}
          >
            &ensp; With a tight budget, no insider knowledge of local eateries,
            and meal times dictated by my route, existing food finder apps like
            Yelp proved cumbersome, especially with my spotty LTE connection on
            the road.
          </DialogDescription>
          <DialogDescription
            style={{ color: "black", fontSize: "16px", lineHeight: 1.4 }}
          >
            &ensp; Because of this frustrating experience, I set out to create a
            solution. Thus, &quot;Cheap & Yummy&quot; was born—a user-friendly
            app designed to streamline the search for tasty, budget-friendly
            meals during travel. It&apos;s my way of ensuring that everyone can
            embark on culinary adventures without the hassle.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
