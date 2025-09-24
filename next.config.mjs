/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'antd',
    '@ant-design/icons',
    '@ant-design/icons-svg',
    'rc-util', // ✅ 추가
    'rc-pagination',
    'rc-picker',
    'rc-tabs',
  ],
};

export default nextConfig;
