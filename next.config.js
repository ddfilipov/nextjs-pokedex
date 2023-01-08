/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["pokeapi.co"],
        loader: "custom",
        path: "/",
    },
};

module.exports = nextConfig;
