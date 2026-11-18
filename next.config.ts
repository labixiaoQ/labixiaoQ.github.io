import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Keep the exported .html links usable in the development server too.
  ...(process.env.NODE_ENV === "development" ? {
    async rewrites() {
      return [
        { source: "/index.html", destination: "/" },
        { source: "/publication.html", destination: "/publication" },
        { source: "/software.html", destination: "/software" },
        { source: "/blog.html", destination: "/blog" },
      ];
    },
  } : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
