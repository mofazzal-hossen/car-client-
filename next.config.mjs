/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactCompile true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;