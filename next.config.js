/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'thumbs.dreamstime.com',
      'media.istockphoto.com',
      'petopedia.petscorner.co.uk',
      'media.istockphoto.com',
    ],
  },
}

module.exports = nextConfig
