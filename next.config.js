/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["pokeapi.co"],
        loader: "custom",
        path: "/",
    },
    compiler: {
      // Enables the styled-components SWC transform
      styledComponents: true
    }
};

module.exports = nextConfig;
