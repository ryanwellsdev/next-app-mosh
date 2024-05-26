/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.alesis.com',
            },
        ],
    },

}

module.exports = nextConfig