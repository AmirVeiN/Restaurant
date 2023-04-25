// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   output: 'export',
//   unoptimized: true,
// }
// module.exports = {
//   images: {
//     loader: 'custom',
//     loaderFile: './my/image/loader.js',
//   },
// }
// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  experimental: {
    images: {
        unoptimized: true
    }
},
  env: {
  }
}

module.exports = nextConfig