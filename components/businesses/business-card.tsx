"use client";

import Ratings from "./ratings";
import { Separator } from "../ui/separator";
import Image from "next/image";

export default function BusinessCard({ business }: { business: Business }) {
  const {
    name,
    review_count,
    categories,
    rating,
    location,
    display_phone,
    distance,
    image_url,
    url,
    id,
    transactions,
  } = business;

  const shortedCategories = categories?.map((item) => item.title).slice(0, 2);

  return (
    <div
      className=" w-[500px]  hover:rounded-lg hover:bg-card hover:text-card-foreground hover:shadow-xl"
      // rounded-lg border bg-card text-card-foreground shadow-sm
    >
      <a target="_blank" href={url} rel="noopener noreferrer">
        <div className="pb-8 pl-4  pt-8">
          <div className="text-black text-[24px] font-semibold pb-1">
            {name}
          </div>
          <div className="md:flex flex-row">
            <div className="flex-1">
              <div className="flex flex-row gap-1">
                <Ratings rating={rating} />
                <span className="text-gray-400 text-sm">
                  ({review_count} reviews)
                </span>
              </div>
              {shortedCategories && (
                <div className="flex flex-row gap-1 pt-2 pb-1">
                  {shortedCategories.map((item) => (
                    <span
                      className="px-1 text-sm rounded-lg border bg-card text-card-foreground shadow-sm"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <Separator className="my-1" />
              <div className="flex flex-col gap-1">
                <div>
                  <p className="font-bold">Location:</p>{" "}
                  <p className="leading-tight text-sm">
                    {location.display_address.join(", ")}
                  </p>
                </div>
                {display_phone && (
                  <div>
                    <p className="font-bold">Phone:</p>
                    <p className="leading-tight text-sm">{display_phone}</p>
                  </div>
                )}
                {transactions[0] && (
                  <div>
                    <p className="font-bold">Service options:</p>{" "}
                    {transactions.map((item) => (
                      <span
                        className="px-1 text-sm rounded-lg border bg-card text-card-foreground shadow-sm"
                        key={item}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="flex-2 px-4">
              <div className="overflow-hidden h-[150px] w-[150px] relative  rounded-md">
                <Image
                  src={image_url}
                  sizes="inherit"
                  fill
                  // objectFit="cover"
                  style={{
                    objectFit: "cover",
                  }}
                  alt={name}
                  blurDataURL={image_url}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
