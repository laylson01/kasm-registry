const nextConfig = {
  env: {
    name: 'Laylson C. Silva',
    description: 'Workspace Registry',
    icon: '/img/logo.svg',
    listUrl: 'https://laylson01.github.io/kasm-registry/1.0/',
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
