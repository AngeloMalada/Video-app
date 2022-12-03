/** @type {import('next').NextConfig} */
module.exports = {
  //typescript ignore errors is needed because it refuses to build with webkitrequestfullscreen
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
};

//ignore build errors
