import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    allowedDevOrigins: ["http://localhost:3000"], // can add more origins if needed
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com",
                // port: "",
                // pathname: "/account123/**",
            },
        ],
    },
};

export default nextConfig;
