/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.DOMAIN_IMAGE || '127.0.0.1'],
    },
}

module.exports = nextConfig
