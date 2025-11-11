/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/**",
      },
      {
        // dummyjson sometimes serves images from i.dummyjson.com
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
