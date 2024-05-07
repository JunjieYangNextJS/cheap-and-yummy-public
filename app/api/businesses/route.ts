
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {

    try {
       
        const latitude = req.nextUrl.searchParams.get("latitude");
        const longitude = req.nextUrl.searchParams.get("longitude");
        const radius = req.nextUrl.searchParams.get("radius");
        const price = req.nextUrl.searchParams.get("price");
        const open_now = req.nextUrl.searchParams.get("isOpenNow");

        const options = {
            method: "GET",
            url: "https://api.yelp.com/v3/businesses/search",
            params: {
              latitude,
              longitude,
              term: "restaurants",
              radius,
              price,
              sort_by: "rating",
              limit: "30",
              open_now
            },
            headers: {
              accept: "application/json",
              "x-requested-with": "xmlhttprequest",
              "Access-Control-Allow-Origin": "*",
              
              Authorization:
                `Bearer ${process.env.API_KEY}`,
            },
          };
    
          const res = await axios.request(options);
          const data = await res.data;
         


        

        return NextResponse.json(
            data.businesses
        )
    } catch (error) {
        console.log("BUSINESSES_GET");
        return new NextResponse("Internal Error", {status: 500})
    }
}