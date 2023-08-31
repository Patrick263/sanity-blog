/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental :{
        appDir:true,
    },
    images:{
        domains: ["links.papareact.com", "cdn.sanity.io","encrypted-tbn0.gstatic.com"],
    },
}

module.exports = nextConfig

