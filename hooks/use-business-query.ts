"use client"

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useBusinessQuery = (price: number, radius: number, latitude: number, longitude: number, isOpenNow: boolean) => {
    let limit = 30;
    const radiusInMeters = radius * 1609


    const getBusiness = async () => {
        
        const res = await axios({
                method: "get",
                url: "/api/businesses",
                params: { latitude, longitude, radiusInMeters, price, isOpenNow },
              });

       
          const data = await res.data;
          return data;


    }

    const { isPending, isError, data, error } = 
    useQuery(
        {
            queryKey: ["business", {price, radius, latitude, longitude, limit, isOpenNow}], 
            queryFn: getBusiness 
        }
    );



    return { isPending, isError, data, error };
}

export default useBusinessQuery;