/** @type {import("next").NextConfig} */
module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.module.rules.push({
          test: /\.md$/,
          type: 'asset/source',
        });
      }
  
      return config;
    },
  };