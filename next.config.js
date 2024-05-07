/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "s3-media4.fl.yelpcdn.com",
      },
      {
        protocol: "https",
        hostname: "s3-media2.fl.yelpcdn.com",
      },
      {
        protocol: "https",
        hostname: "s3-media1.fl.yelpcdn.com",
      },
      {
        protocol: "https",
        hostname: "s3-media3.fl.yelpcdn.com",
      },
    ],
  },
};

module.exports = nextConfig;
