// type Transaction = "pickup" | "delivery"

type Business = {
    
        id: string,
        alias: string,
        name: string,
        image_url: string,
        is_closed?: boolean,
        url?: string,
        review_count?: number,
        categories?: {
            alias: string,
            title: string
        }[],
        rating: number,
        coordinates?: {
          latitude: string,
          longitude: string
        },
        transactions: string[],
        price?: "$" | "$$",
        location: {
          address1: string,
          address2: string,
          address3: string,
          city: string,
          zip_code: string,
          country: string,
          state: string,
          display_address: string[]
        },
        phone?: string,
        display_phone?: string,
        distance?: number,
        
      
}