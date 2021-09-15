module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/entrar',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['api.orbt.com.br'],
  },
}