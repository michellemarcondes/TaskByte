/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/TaskByte', // troque pelo nome do seu repositório no GitHub
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
