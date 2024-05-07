import { Metadata } from "next";

import Body from "@/components/businesses/Body";

export const metadata: Metadata = {
  title: "Cheap And Yummy",
  description:
    "This website gives you the best and cheapest foods around your area",
};

export default function Home() {
  // const { width } = useWindowWidth();
  // console.log(width);

  return (
    <div className="">
      <Body />
    </div>
  );
}
