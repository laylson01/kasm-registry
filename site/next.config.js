const nextConfig = {
  env: {
    name: 'TESTE KASM TEMPLATE',
    description: 'The NOVA Corporation Kasm Images',
    icon: '/img/logo.svg',
    listUrl: 'https://laylson01.github.io/kasm-registry/',
    contactUrl: 'https://lacolyn.com/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
